"use strict";

module.exports = {
    index: (req, res) => {
        res.render("index");
    },

    threadList: (req, res) => {
        const paramsName = req.params.categoryName;
        res.render("threadList", { categoryName: paramsName });
    },

    newThread: (req, res) => {
        res.render("newThread");
    },

    logIn: (req, res) => {
        res.render("logIn");
    },

    signUp: (req, res) => {
        res.render("signUp");
    }
};