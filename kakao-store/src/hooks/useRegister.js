import { useState } from "react";
import { register } from "../api/auth";
import { validateForm } from "../utils/validate";

function useRegister() {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false)
  const handleRegister = (value) => {
    const validationErrors = validateForm(value);

    if (!validationErrors) {
      register({
        email: value.email,
        password: value.password,
        username: value.username,
      }).then(() => {
        setSuccess(true)
      }).catch(() => {
       // 에러처리
       })
    } else {
      setErrors(validationErrors);
    }
  };
  return {
    errors,
    handleRegister,
    success
  }
}

export default useRegister;