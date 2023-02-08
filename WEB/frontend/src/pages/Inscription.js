import { useParams } from 'react-router-dom';

import SigninForm from '../components/SigninForm';
import LoginForm from '../components/LoginForm';

function Inscription() {
  const { login } = useParams();

  return (
    <>
        {login === "Inscription"? <SigninForm/>: <LoginForm/>}
    </>
  );
}

export default Inscription;
