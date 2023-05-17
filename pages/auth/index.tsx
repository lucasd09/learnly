import Link from "next/link";
import React from "react";
import {
  wrapper,
  container,
  button,
  input,
  checkbox,
  label,
  inputContainer,
  checkboxContainer,
  buttonContainer,
  text,
} from "../../styles/auth.css";
import Logo from "@/components/logo";
import { useRouter } from 'next/router';

const Auth: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    if (1 == 1) {
      router.push('/app/dashboard')
    } 
  } 

  return (
    <div className={wrapper}>
      <div className={container}>
        <Logo />
        <div className={inputContainer}>
          <label className={label}>Email</label>
          <input type="text" className={input} />
          <label className={label}>Senha</label>
          <input type="password" className={input} />
        </div>

        <div className={checkboxContainer}>
          <label>
            <input type="checkbox" className={checkbox} />
            Lembrar de mim
          </label>
          <Link href={"/"}>Esqueci minha senha</Link>
        </div>
        <div className={buttonContainer}>
          <button className={button.primary} onClick={handleClick}>Login</button>
        </div>

        <p className={text}>
          Não possui conta? <Link href={"/register"}>Registre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;
