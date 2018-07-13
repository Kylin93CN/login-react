import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

// 验证用户信息
const validateInput = (data) => {
  let errors = {};
  if(validator.isEmpty(data.identifier)) {
    errors.identifier = "the identifier is required!";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "the password is required!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
export default validateInput;