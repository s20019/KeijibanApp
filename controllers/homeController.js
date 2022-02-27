"use strict";

module.exports = {
    index: (req, res) => {
        res.render("index");
    },

    threadList: (req, res) => {
        res.render("threadList");
    }
};