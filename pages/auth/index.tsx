import Link from "next/link";
import React from "react";
import { wrapper, container } from "./styles.css";
import Logo from "@/components/logo";

const Auth: React.FC = () => {
  return (
    <div className={wrapper}>
      <div className={container}>
        <Logo />
        <label>Email</label>
        <input type="text" />
        <label>Senha</label>
        <input type="password" />
        <div>
          <label>
            <input type="checkbox" />
            Lembrar de mim
          </label>
          <Link href={"/"}>Esqueci minha senha</Link>
        </div>
        <button>Login</button>
        <button>Continuar com Google</button>
        <p>
          Não possui conta? <Link href={"/register"}>Registre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;
