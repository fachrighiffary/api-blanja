/* eslint-disable no-undef */
const authModel = require("../models/auth")
const form = require("../helpers/form");

module.exports = {
    register : (req, res) => {
        const {body} = req;
        authModel
        .postNewUser(body)
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