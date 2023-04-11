import Link from 'next/link';
import React from 'react';
import { wrapper, container } from './styles.css';

const Auth: React.FC = () => {
  return <div className={wrapper}>
    <div className={container}>
      <input type="text" />
      <input type="text" /> 
      <p>Não possui conta? <Link href={'/register'} >Registre-se</Link></p>
      <button>Login</button>
      <button>Continuar com Google</button>
    </div>
  </div>;
}

export default Auth;