/* eslint-disable no-undef */
const authModel = require("../models/auth")
const form = require("../helpers/form");

module.exports = {
    register : (req, res) => {
        const {body} = req;
        authModel.postNewUser(body)
        .then(() => {
            form.success(res, {
                msg: "Register Berhasil",
                userData : {
                    username: body.username,
                }
            })
        })
        .catch((err) => {
            form.error(res,err)
        });
    },
    activate: (req, res) => {
        const {email, otp} = req.params
        console.log(email, otp)
        authModel.activate(email, otp)
        .then((result) =>{
            res.status(200).json(result)
        }).catch((error) => {
            res.status(error.status).json(error)
        })
    },    
    resend: (req, res) => {
        const {email} = req.body
        authModel.resend(email)
        .then((result) =>{
            res.status(200).json(result)
        }).catch((error) =>{
            res.status(error.status).json(error)
        })
    },
    forgot: (req, res) => {
        const {email} = req.body
        authModel.postForget(email)
        .then((result) =>{
            res.status(200).json(result)
        }).catch((error) =>{
            res.status(error.status).json(error)
        })
    },
    login : (req, res) => {
        const {body} = req
        authModel
        .postLogin(body)
        .then((data) => {
            form.success(res, data)
        })
        .catch((err) => {
            form.error(res,err)
        })
    },
    otp: (req, res) => {
        const {email, otp} = req.params
        authModel.getOtp(email, otp)
        .then((result) =>{
            res.status(200).json(result)
        }).catch((error) => {
            res.status(error.status).json(error)
        })
    },
    reset: (req,res) => {
        const {email, newPassword} = req.body
        console.log(req.body)
        authModel.resetPassword(email, newPassword)
        .then((result) =>{
            res.status(200).json(result)
        }).catch((error) =>{
            res.status(500).json(error)
        })
    },
    changePassword: (req, res) => {
        const {body} = req
        authModel.userChangePassword(body)
        .then((result) => {
            res.status(result.status).json(result)
        }).catch((error) => {
            res.status(error.status).json(error)
        })
    },
    logout : (req, res) => {
        const bearerToken = req.header("x-access-token");
        if(!bearerToken){
            res.json({
                msg: 'token null',
            })
        }else{
            blacklistToken = {
                token : bearerToken.split(" ")[1],
            }
            authModel
            .logout(blacklistToken)
            .then((result) => {
                form.success(res, result)
            })
            .catch((error) => {
                form.error(res, error)
            })
        }
    },
    user : (req, res) => {
        authModel
        .getUser(req)
        .then((data) => {
            if(data.length){
                form.success(res, data)
            }else{
                form.error(res, error)
            }
        })
        .catch((err) => [
            form.error(res, err)
        ])
    }
}