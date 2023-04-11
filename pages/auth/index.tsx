import Link from 'next/link';
import React from 'react';
import { wrapper, container } from "./styles.css";

const Auth: React.FC = () => {
  return <div className={container}>
          <div >
            <input type="text" />
            <input type="text" /> 
            <button>Login</button>
            <button>Continuar com Google</button>
            <p>Não possui conta? <Link href={'/register'} >Registre-se</Link></p>
          </div>
  </div>;
}

export default Auth;