"use strict";

const mongoose = require("mongoose");
const Thread = require("../models/threads");

module.exports = {
    index: (req, res) => {
        res.render("index");
    },

    threadList: (req, res) => {
        const paramsName = req.params.categoryName;
        res.render("threadList", { categoryName: paramsName });
    },

    newThread: (req, res, next) => {
      /*  const params = {
            title: req.body.title,
            category: req.body.category
        }
        Thread.create(params)
            .then(() => {
                res.locals.redirect = `/${req.params.categoryName}`
                next()
            })

       */
        res.render("newThread");
    },

    redirectView: (req, res, next) => {
        const redirectPath = res.locals.redirect;
        if (redirectPath !== undefined) res.redirect(redirectPath);
        else next();
    },

    logIn: (req, res) => {
        res.render("logIn");
    },

    signUp: (req, res) => {
        res.render("signUp");
    }
};