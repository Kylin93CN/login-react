import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';

let router = express.Router();

function validatorInputValue(data){
  let errors = {};

  if(validator.isEmpty(data.username)){
    errors.usermame = "The field is Required!";
  }

  if(validator.isEmpty(data.email)){
    errors.email = "The field is Required!";
  }

  if(validator.isEmpty(data.password)){
    errors.password = "The field is Required!";
  }

  if(validator.isEmpty(data.passwordConfirm)){
    errors.passwordConfirm = "The field is Required!";
  }

  return {
    errors,
    isValid: isEmpty(data)
  }
}

router.post('/',(req, res) => {
  const { errors, isValid } = validatorInputValue(req.body);
  if(!isValid) {
    res.status(403).json(errors);
  }
});

export default router;