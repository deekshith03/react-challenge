const express = require('express');
const router = express.Router();
const changePass=require('../services/changepassword')

router.get('/', async function(req, res, next) {
    try {
      res.json(await changePass.changePassFunc("admin@gmail.com","Newpass@123"));
    } catch (err) {
      console.error(`Error `, err.message);
      next(err);
    }
  });

module.exports = router;