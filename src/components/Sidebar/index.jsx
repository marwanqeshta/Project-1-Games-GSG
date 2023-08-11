import React from 'react';
import './style.css';
import Theme from '../Theme';
import { Link } from 'react-router-dom';
import { PATHS } from '../../router/pathes';
import { useThemeContext } from '../../context/ThemeContext';
import { THEMES } from '../../constants';
import { useAuthContext } from '../../context/AuthContext';


const Sidebar = () => {
  const { theme } = useThemeContext();
  const { logout, user } = useAuthContext();

  return (
    <aside className="sidebar">
      <div className="logo">
        <Link to={PATHS.HOME}>
          <img src='assets/Game-two.svg'  alt='logo' />
        </Link>
      </div>
      <div className="logout_icon">
        {user?.isAdmin && (
          <Link to={PATHS.USERS}>
             <img src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png" alt="setting" className='setting' />

          </Link>
        )}
        <svg
          onClick={logout}
          stroke={theme === THEMES.DARK ? '#555' : '#fff'}
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          height='2em'
          width='2em'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
          <polyline points='16 17 21 12 16 7'></polyline>
          <line x1='21' y1='12' x2='9' y2='12'></line>
        </svg>
      </div>
      <Theme />
    </aside>
  );
};

export default Sidebar;
