import { StyleLogin } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import logoGroup from "../../assets/img/logoGroup.svg";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data: any) => login(data);

  return (
    <StyleLogin>
      <div className="registerContainer container">
        <div className="formRegister">
          <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <div className="title">
              <p>Login</p>
            </div>
            <label htmlFor="">E-mail</label>
            <input
              placeholder="Digite aqui seu e-mail..."
              {...register("email")}
            />

            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha..."
              {...register("password")}
            />
            <button type="submit" className="button-green">
              Logar
            </button>
            <small>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </small>
            <button
              className="button-grey"
              onClick={() => {
                navigate("/register");
              }}
            >
              Cadastrar
            </button>
          </form>
        </div>
        <div className="imgMain">
          <img src={logoGroup} alt="" />
        </div>
      </div>
    </StyleLogin>
  );
};

export default Login;
