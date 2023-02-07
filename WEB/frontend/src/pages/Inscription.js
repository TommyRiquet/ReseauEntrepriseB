import { useParams } from 'react-router-dom';

import SigninForm from '../components/SigninForm';
import LoginForm from '../components/LoginForm';

function Inscription() {
  const { login } = useParams();

  return (
    <>
        <h1>{login}</h1>
        {login === "Inscription"? <SigninForm/>: <LoginForm/>}
    </>
  );
}

export default Inscription;
