import Link from "next/link";
import React from "react";
import { wrapper, container, button, buttonVariant, input , checkbox, label, inputContainer, checkboxContainer } from "./styles.css";
import Logo from "@/components/logo";

const Auth: React.FC = () => {
  return (
    <div className={wrapper}>
      <div className={container}>
        <Logo />
        <div className={inputContainer}>
          <label className={label}>Email</label>
          <input type="text" className={input} />
        </div>
        <div className={inputContainer}>
          <label className={label}>Senha</label>
          <input type="password" className={input}/>
        </div>
        
        <div className={checkboxContainer}>
          <label>
            <input type="checkbox" className={checkbox} />
            Lembrar de mim
          </label>
          <Link href={"/"}>Esqueci minha senha</Link>
        </div>
        <button className={button}>Login</button>
        <button className={buttonVariant}>Continuar com Google</button>
        <p>
          Não possui conta? <Link href={"/register"}>Registre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;
