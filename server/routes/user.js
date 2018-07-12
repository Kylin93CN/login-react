import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';
import bcrypt from 'bcrypt';

import User from '../modles/user';

let router = express.Router();

// 用户信息输入校验
const commonValidateInput = (data) => {
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

// 账户、邮箱唯一性校验
const validateInput = (data, otherValidations) => {
  const { errors } = otherValidations(data);
  return User.query({
    where: { username: data.username},
    orWhere: { email: data.email }
  }).fetch().then(user => {
    if (user.get('username') === data.username) {
      errors.username = 'The username has been registed!'
    }
    if (user.get('email') === data.email) {
      errors.email = 'The email has been registed!'
    }
    return {
      errors,
      isValid: isEmpty(errors)
    }
  })
}


router.post('/',(req, res) => {
  validateInput(req.body,commonValidateInput).then(({ errors, isValid }) => {
    /**** 失败情况 返回403***/
    if(!isValid) {
      res.status(403).json(errors);
      return;
    }
    /**** 成功情况 ***/
    const { username, password, email } = req.body;
    // 密码加密
    const password_digest = bcrypt.hashSync(password,10);

    // 存储数据库
    User.forge({
      username, password_digest, email
    }, { hasTimestamps: true }).save()
    .then(user => res.json({ success: true }))
    .catch(error => res.status(500).json({ errors: error }));
    });
});

export default router;