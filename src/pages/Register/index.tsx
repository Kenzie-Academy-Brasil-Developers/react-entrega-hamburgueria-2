import { StyleRegister } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import logoGroup from "../../assets/img/logoGroup.svg";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { createAccount } = useContext(UserContext);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
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
  const onSubmitFunction = (data: any) => createAccount(data);

  return (
    <StyleRegister>
      <div className="registerContainer">
        <div className="imgMain">
          <img src={logoGroup} alt="" />
        </div>
        <div className="formRegister">
          <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <div className="title">
              <p>Cadastro</p>
              <small
                onClick={() => {
                  navigate("/");
                }}
              >
                Retornar para o Login
              </small>
            </div>
            <label htmlFor="">Nome</label>
            <input
              placeholder="Digite aqui seu nome..."
              {...register("name")}
            />

            <label htmlFor="">E-mail</label>
            <input
              placeholder="Digite aqui seu email..."
              {...register("email")}
            />

            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha..."
              {...register("password")}
            />
            <button type="submit" className="button-grey">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </StyleRegister>
  );
};

export default Register;
