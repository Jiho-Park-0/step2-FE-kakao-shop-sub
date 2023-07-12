import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useinput";
import Title from "../atoms/Title";
import logo from "../../images/logoKakaoText.png";

import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../../utils/VaildationLogin";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmailandPassword,
  logout,
  setTimeoutId,
  clearTimeoutId,
} from "../../store/slices/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email); // user 안에 email에 접근
  const password = useSelector((state) => state.user.password); // user 안에 password에 접근
  const timeoutId = useSelector((state) => state.user.clearTimeoutId); // user 안에 clearTimeoutId에 접근
  const time = 20 * 1000;

  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (timeoutId) {
      const timeout = setTimeout(() => {
        dispatch(logout());
      }, time);

      return () => {
        clearTimeout(timeout);
        dispatch(clearTimeoutId());
      };
    }
  }, [dispatch, timeoutId]);

  const loginreq = () => {
    login({
      email: value.email,
      password: value.password,
    })
      .then((res) => {
        // 정상
        console.log(res);
        dispatch(
          setEmailandPassword({
            email: value.email,
            password: value.password,
          })
        );
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        const newTimeoutId = setTimeout(() => {
          dispatch(logout());
        }, time);
        dispatch(setTimeoutId(newTimeoutId));
      })
      .catch((err) => {
        // 에러
        console.log(err);
      });
  };
  const handleRegister = () => {
    const validationErrors = validateForm(value);

    if (!validationErrors) {
      loginreq({
        email: value.email,
        password: value.password,
      });
      navigate("/");
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <Container>
      <Title>
        <img src={logo} alt="logo" />
        <span>{email}</span>
        <span>{password}</span>
      </Title>

      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일"
        label="이메일 "
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="비밀번호"
        label="비밀번호 "
        value={value.password}
        onChange={handleOnChange}
      />
      {errors.map((error, index) => (
        <div className="bg-gray-50 p-2">
          <p className=" text-sm font-medium text-red-500" key={index}>
            {error}
          </p>
        </div>
      ))}
      <Button onClick={handleRegister}>로그인</Button>
    </Container>
  );
};

export default LoginForm;
