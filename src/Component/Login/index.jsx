import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

const Login = ({setDisplay}) => {
  const formValidation = yup.object().shape({
    username: yup.string(),
    password: yup.string(),
  });
  const {
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(formValidation) });
  const addPost = (formData) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", formData)
      .then(() => setDisplay("Requisição completa"))
      .catch(() => setDisplay("Requisição falhou"));
  };
  return (
    <form className="formContainer" onSubmit={handleSubmit(addPost)}>
      <input
        className="formInput"
        placeholder="Usuário"
        type="text"
        {...register("username")}
      />
      <input
        className="formInput"
        placeholder="Senha"
        type="password"
        {...register("password")}
      />
      <button className="formButton" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
