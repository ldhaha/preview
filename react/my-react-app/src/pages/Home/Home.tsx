import { useNavigate } from 'react-router-dom';
export function Home() {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login?from=home&name=lindong');
  };
  return (
    <>
      <div>
        <p>
          <button onClick={toLogin}>去登录页</button>
        </p>
      </div>
    </>
  );
}
