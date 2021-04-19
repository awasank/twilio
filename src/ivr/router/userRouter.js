const Router = require('express').Router;

const router = new Router();
const checkUserCard = require("../../db/checkUserCard")

router.post("/user-db:cardNo", checkUserCard)