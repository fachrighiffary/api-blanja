const db = require("../configs/mySQL")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const otp = require("otp-generator");
const nodemailer = require("nodemailer");

module.exports = {
    postNewUser : (body) => {
        return new Promise((resolve, reject) => {
            const saltRounds = Math.floor(Math.random() * 10) + 1;
            //hashPassword
            bcrypt.hash(body.password, saltRounds, (err, hashedPassword) => {
                const newUser = {...body, password: hashedPassword}; 
                const qs  = "INSERT INTO users SET ?"
                db.query(qs, newUser, (err, data) => {
                  if(!err){
                    const otpCode = otp.generate(6, {
                        alphabets: true,
                        upperCase: true,
                        specialChars: false,
                      });
                      const OTPsend = {
                        email: body.email,
                        otp: otpCode,
                      };
                      const qs = "INSERT INTO tb_otp_activation SET ?";
                      db.query(qs, OTPsend, (err, data) => {
                          if(!err) {
                                let transporter= nodemailer.createTransport({
                                  service: "gmail",
                                  host: "smtp.gmail.com",
                                  port: 578,
                                  secure: false,
                                  auth: {
                                  user: process.env.USER_EMAIL,
                                  pass: process.env.PASS_EMAIL,
                                },
                              });
                              let mailOptions = {
                                from: "BlanjaApp <blanja@mail.com>",
                                to: body.email,
                                subject: "OTP Code Activation Account",
                                html: ` 
                                                          <h1> OTP CODE From Blanja Ecommers Team </h1>
                                                          <p> Hello, this is you OTP code</p> 
                                                          <br></br>
                                                          <h3>${otpCode}<h3> 
                                                          <p> Use it to Activate Account </p>
                                                          `,
                              };
                              transporter.sendMail(mailOptions, (err, data) => {
                                  if(err){
                                      console.log("its Error: ", err);
                                  }else {
                                      console.log(`Sent to ${body.email} Success!!!`);
                                      resolve({
                                          status: 200,
                                          message : `Kode Otp telah dikirim ke email anda`,
                                      })
                                  }
                              })
                          }else{
                              reject({
                                  status: 500,
                                  message: `internal server error`,
                                  details: err
                              })
                          }
                      });
                    } else{
                      console.log('eror'),
                      reject({
                        status: 500,
                        message: `Internal server error`,
                        details: err,
                      });
                  }
                })
            })
        })
    },
    activate : (email, otp) => {
        console.log(email)
        return new Promise((resolve, reject) => {
            const qs = `SELECT * FROM tb_otp_activation WHERE email = ? AND otp = ?`;
            db.query(qs, [email, otp], (err, data) => {
                if(!err){
                    if(data[0]){
                        const qs = `DELETE FROM tb_otp_activation WHERE email = ? AND otp = ?`;
                        db.query(qs, [email, otp], (err, data) => {
                            if(!err){
                                const activeAcc = `UPDATE users SET isActive = 1 WHERE email = ?`
                                db.query(activeAcc, email, (err, data) => {
                                    if(!err){
                                        resolve({
                                            status: 200,
                                            message: 'selamat akun anda berhasil diaktivasi',
                                            email: email
                                        })
                                    }else{
                                        reject({
                                            status: 500,
                                            message: 'Internal server error',
                                            detail: err
                                        })
                                    }
                                })
                            }else{
                                reject({
                                    status: 500,
                                    message: `INTERNAL SERVER ERROR`,
                                    details: err,
                                });
                            }
                        })
                    }else{
                        reject({
                            status: 404,
                            message: `Kode OTP tidak sesuai atau email belum terdaftar atau akun sudah pernah di aktivasi`,
                        });
                    }
                }else{
                    reject({
                        status: 500,
                        message: `INTERNAL SERVER ERROR`,
                        details: err,
                    });
                }
            })
        })
    },
    resend : (email) => {
        return new Promise((resolve, reject) =>{
            const getUser = 'SELECT email, isActive FROM users WHERE email = ?'
            db.query(getUser, email, (err, data) => {
                if(!err){
                    if(data[0]){
                        if(data[0].isActive != 0){
                            resolve({
                                status: 200,
                                message: `Akun anda sudah pernah di aktivasi`
                            })
                        }else{
                            const deleteOtp = `DELETE FROM tb_otp_activation WHERE email = ?`
                            db.query(deleteOtp, email, (err, data) => {
                                if(!err){
                                    const otpCode = otp.generate(6, {
                                        alphabets: true,
                                        upperCase: true,
                                        specialChars: false,
                                      });
                                      const OTPsend = {
                                        email: email,
                                        otp: otpCode,
                                      };
                                      const qs = "INSERT INTO tb_otp_activation SET ?";
                                      db.query(qs, OTPsend, (err, data) => {
                                          if(!err) {
                                                let transporter= nodemailer.createTransport({
                                                  service: "gmail",
                                                  host: "smtp.gmail.com",
                                                  port: 578,
                                                  secure: false,
                                                  auth: {
                                                  user: process.env.USER_EMAIL,
                                                  pass: process.env.PASS_EMAIL,
                                                },
                                              });
                                              let mailOptions = {
                                                from: "BlanjaApp <blanja@mail.com>",
                                                to: email,
                                                subject: "OTP Code Activation Account",
                                                html: ` 
                                                                          <h1> OTP CODE From Blanja Ecommers Team </h1>
                                                                          <p> Hello, this is you OTP code</p> 
                                                                          <br></br>
                                                                          <h3>${otpCode}<h3> 
                                                                          <p> Use it to Activate Account </p>
                                                                          `,
                                              };
                                              transporter.sendMail(mailOptions, (err, data) => {
                                                  if(err){
                                                      console.log("its Error: ", err);
                                                  }else {
                                                      console.log(`Sent to ${email} Success!!!`);
                                                      resolve({
                                                          status: 200,
                                                          message : `Kode Otp telah dikirim ke email anda`,
                                                      })
                                                  }
                                              })
                                          }else{
                                              reject({
                                                  status: 500,
                                                  message: `internal server error`,
                                                  details: err
                                              })
                                          }
                                      });
                                    } else{
                                      console.log('eror'),
                                      reject({
                                        status: 500,
                                        message: `Internal server error`,
                                        details: err,
                                      });
                                  }
                            })
                        }
                    }else {
                        reject({
                          status: 404,
                          message: `Email tidak ditemukan`,
                        });
                      }
                }else{
                    reject({
                        status: 500,
                        message: `Internal server error`,
                        details: err,
                    })
                }
            })
        })
    },    
    postLogin : (body) => {
        return new Promise ((resolve, reject) => {
            const {email, password, level_id} = body
            const qs = "SELECT password, id, email , username, store_name, level_id, isActive FROM users WHERE email=? AND level_id=?"

            db.query(qs, [email, level_id], (err, data) => {
                if(err) {
                    reject({
                        msg: "Error SQL",
                        status: 500,
                        err,
                    })
                }
                if(!data[0]){
                    reject({
                        msg: "User Not Found",
                        status : 404
                    })
                }else if(data[0].isActive == 0) {
                    reject({
                        status: 401,
                        msg: `Please Active your account first`
                    })
                }else{
                    bcrypt.compare(password, data[0].password, (err, result) => {
                        if(err) {
                            reject({
                                msg : "Hash error",
                                status : 500,
                                err
                            })
                        }
                        //result => antara true : false
                        if(!result){
                            reject({
                                msg: "Wrong password",
                                status : 401
                            })
                        }else {
                            const payload = {
                                user_id: data[0].id,
                                email,
                                level : data[0].level_id,
                            }
                            const secret = process.env.SECRET_KEY;
                            const token = jwt.sign(payload, secret)
                            resolve({
                                id          : data[0].id,
                                email       : data[0].email,
                                username    : data[0].username,
                                level       : data[0].level_id,
                                store_name  : data[0].store_name, 
                                token
                            });
                        }
                    })
                }
            })
        })
        
    },
    postForget : (email) => {
        return new Promise((resolve, reject) => {
            const getUser = `SELECT email FROM users WHERE email = ?`
            db.query(getUser, email, (err, data) => {
                if(!err){
                    if(data[0]){
                        const deleteOtp = `DELETE FROM tb_otp WHERE email = ?`;
                        db.query(deleteOtp, email, (err, data) => {
                            if(!err){
                                const otpCode = otp.generate(6, {
                                    alphabets: true,
                                    upperCase: true,
                                    specialChars: false,
                                  });
                                const dataResend = {
                                    email: email,
                                    otp: otpCode,
                                };
                                const qs = `INSERT INTO tb_otp SET ?`;
                                db.query(qs, dataResend, (err, data) => {
                                    if(!err){
                                        let transporter = nodemailer.createTransport({
                                            service: "gmail",
                                            host: "smtp.gmail.com",
                                            port: 578,
                                            secure: false,
                                            auth: {
                                                user: process.env.USER_EMAIL,
                                                pass: process.env.PASS_EMAIL,
                                            },
                                        });
                                        let mailOptions = {
                                            from: "BlanjaApp <blanja@mail.com>",
                                            to: email,
                                            subject: "OTP Code For Reset Password",
                                            html: ` 
                                                                      <h1> OTP CODE From Blanja Ecommers Team </h1>
                                                                      <p> Hello, this is you OTP code</p> 
                                                                      <br></br>
                                                                      <h3>${otpCode}<h3> 
                                                                      <p> Use it to Activate Account </p>
                                                                      `,
                                          };
                                        transporter.sendMail(mailOptions, (err, data) => {
                                            if (err) {
                                                console.log("Its Error: ", err);
                                            } else {
                                                console.log("Sent Success!!!!");
                                                resolve({
                                                status: 200,
                                                message: `Kode OTP telah dikirim ulang ke email anda`,
                                                });
                                            }
                                        });
                                    }else{
                                        reject({
                                            status: 500,
                                            message: `Internal server error`,
                                            details: err,
                                        })
                                    }
                                })
                            }else{
                                reject({
                                    status: 500,
                                    message: `Internal server error`,
                                    details: err,
                                })
                            }
                        })
                    }else{
                        reject({
                            status: 404,
                            message: `Email tidak ditemukan`,
                        })
                    }
                }else{
                    reject({
                        status: 500,
                        message: `Internal server error`,
                        details: err,
                    })
                }
            })
        })
    },
    getOtp : (email, otp) => {
        return new Promise((resolve, reject) => {
            const qs = 'SELECT * FROM tb_otp WHERE email = ? AND otp = ?'
            db.query(qs, [email, otp], (err, data) => {
                if(!err){
                    if(data[0]){
                        const qs = `DELETE FROM tb_otp WHERE email = ? AND otp = ?`
                        db.query(qs, [email, otp], (err, data) => {
                            if(!err){
                                resolve({
                                    status: 200,
                                    message: `Silahkan set Ulang password Anda`,
                                    email: email
                                })
                            }else{
                                reject({
                                    status: 404,
                                    message: 'INTERNAL SERVER ERROR',
                                    details: err
                                })
                            }
                        })
                    }else{
                        reject({
                            status: 500,
                            message: `INTERNAL SERVER ERROR`,
                            details: err,
                        })
                    }
                }else{
                    reject({
                        status: 500,
                        message: `INTERNAL SERVER ERROR`,
                        details: err,
                    })
                }
            })
        })
    },
    resetPassword : (email, newPassword) => {
        return new Promise((resolve, reject) => {
            const saltRounds = Math.floor(Math.random() * 10) + 1;
            bcrypt.hash(newPassword, saltRounds, (err, hashedPassword) => {
                if(!err){
                    newPassword = hashedPassword;
                    const qs = `UPDATE users SET password = ? WHERE EMAIL = ?`;
                    db.query(qs, [newPassword, email], (err, data) => {
                        if(!err){
                            resolve({
                                status: 200,
                                message: 'PASSWORD BERHASIL DIRUBAH'
                            })
                        }else{
                            reject({
                                status: 500,
                                message: 'INTERNAL SERVER ERROR',
                                details: err
                            })
                        }
                    })
                }else{
                    reject({
                        status: 500,
                        message: 'INTERNAL SERVER ERROR',
                        details: err
                    })
                }
            })
        })
    },
    userChangePassword: (body) => {
        return new Promise((resolve, reject) => {
            const {email, old_password, new_password} = body;
            const qs = `SELECT password FROM users WHERE email = ?`;
            db.query(qs, email, (err, data) => {
                if(!err){
                    if(data.length > 0){
                        bcrypt.compare(old_password, data[0].password, (error, result) => {
                            if(error){
                                reject({
                                    status: 500,
                                    message: error
                                })
                            }
                            if(!result){
                                reject({
                                    status: 401,
                                    message: 'Password Salah'
                                })
                            }else{
                                const saltRounds = Math.floor(Math.random() * 10) + 1;
                                bcrypt.hash(new_password, saltRounds, (errorHash, hashedPassword) => {
                                    if(errorHash){
                                        reject({
                                            status: 500,
                                            message: errorHash,
                                        })
                                    }else{
                                        const updatePassword = `UPDATE users SET password = ? WHERE email = ? `
                                        db.query(updatePassword, [hashedPassword, email], (errorUpdate, data) => {
                                            if(!errorUpdate){
                                                resolve({
                                                    status: 200,
                                                    message: 'Change Password Berhasil'
                                                })
                                            }else{
                                                reject({
                                                    status: 500,
                                                    message: errorUpdate
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }else{
                        reject({
                            status: 404,
                            message: 'Data tidak ditemukan'
                        })
                    }
                }else{
                    reject({
                        status: 500,
                        message: err
                    })
                }
            })
        })
    },
    logout : (blacklistToken) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO blacklist_token SET ?";
            db.query(qs, blacklistToken, (err) => {
                if(!err){
                    resolve({
                        msg: "Logout Berhasil"
                    })
                }else{
                    reject({
                        msg:'Logout Gagal'
                    })
                }
            })
        })
    },
    getUser: (req) => {
        const {id} = req.params
        return new Promise((resolve, reject) => {
            const qs = 'SELECT a.id, a.username, a.email, a.phone_number, a.store_name, a.store_desc, a.photo, b.level FROM users AS a JOIN levels as b ON a.level_id = b.id WHERE a.id = ?'

            db.query(qs, id, (err, data) => {
                if (!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    }


}