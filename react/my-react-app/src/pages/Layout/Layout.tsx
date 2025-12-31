// Layout.jsx
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import layout from './layout.module.css';
import { Breadcrumb } from 'antd';
export default function Layout() {
  const location = useLocation();
  const tabList = [
    {
      name: '首页',
      path: '/home'
    },
    { name: '关于', path: '/about' },
    { name: '登录', path: '/login' }
  ];

  return (
    <div>
      <Breadcrumb>
        {tabList.map((tab) => (
          <Breadcrumb.Item key={tab.path}>
            <NavLink
              to={tab.path}
              className={
                location.pathname === tab.path
                  ? layout.activeTab
                  : layout.deactiveTab
              }
            >
              {tab.name}
            </NavLink>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      {/* 子路由组件将在这里渲染 */}
      <Outlet />
    </div>
  );
}
