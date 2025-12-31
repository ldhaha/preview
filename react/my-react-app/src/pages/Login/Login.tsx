import { memo, useCallback, useContext, useEffect, useMemo } from 'react';
import { useUserStore } from '../../reducers/userStore';
import { apiFetch } from '../../service/api';
import { ThemeContext } from '../../App';
import { useSearchParams } from 'react-router-dom';
import login from './login.module.css';
export default memo(function Login() {
  console.log('子组件渲染了');

  const theme = useContext<string>(ThemeContext);

  const { state: userState, dispatch: userDispatch } = useUserStore();

  const fullName = useMemo(() => {
    console.log('计算fullName');
    return userState.username + ' - VIP';
    // 只有当userState.username变化时才重新计算
  }, [userState.username]);

  const mockLogin = useCallback(async () => {
    const res = await apiFetch('/login', { username: 'chenlei' });
    userDispatch({ type: 'SET_USERNAME', value: res.username });
  }, []);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(
      '登录页接收到的参数：',
      Object.fromEntries(searchParams.entries())
    );
  }, [searchParams]);

  return (
    <div className={`${theme === 'dark' ? login.darkTheme : ''} ${login.ld}`}>
      <br />
      <button onClick={() => mockLogin()}>设置姓名</button>
      <p>姓名：{userState.username}</p>
      <p>完全的名字：{fullName}</p>
    </div>
  );
});
