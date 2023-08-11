import React from 'react';
import './style.css';
import RightDiv from '../../components/Login/RightDiv';
import LeftDiv from '../../components/Login/LeftDiv';

const LoginPage = () => {
  return (
    <section className="sections">
      <RightDiv />
      <LeftDiv />
    </section>
  );
};

export default LoginPage;
