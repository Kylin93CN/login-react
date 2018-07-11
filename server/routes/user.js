import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';
import bcrypt from 'bcrypt';

import User from '../modles/user';

let router = express.Router();

// 信息校验
function validatorInputValue(data){
  let errors = {};

  if(validator.isEmpty(data.username)){
    errors.username = "The field is Required!";
  }

  if(validator.isEmpty(data.email)){
    errors.email = "The field is Required!";
  }

  if(!validator.isEmail(data.email)){
    errors.email = "Email is invalid!";
  }

  if(validator.isEmpty(data.password)){
    errors.password = "The field is Required!";
  }

  if(validator.isEmpty(data.passwordConfirm)){
    errors.passwordConfirm = "The field is Required!";
  }

  if(!validator.equals(data.password, data.passwordConfirm)){
    errors.passwordConfirm = "Passwords must match!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/',(req, res) => {
  const { errors, isValid } = validatorInputValue(req.body);
  //校验失败返回403
  if(!isValid) {
    res.status(403).json(errors);
  }
  // 成功情况
  const { username, password, email } = req.body;
  const password_digest = bcrypt.hashSync(password,10);

  User.forge({
    username, password_digest, email
  }, { hasTimestamps: true }).save()
  .then(user => res.json({ success: true }))
  .catch(error => res.status(500).json({ errors: error }));
});

export default router;