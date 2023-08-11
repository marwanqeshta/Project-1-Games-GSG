import React from 'react';
import './style.css';
import { THEMES } from '../../constants';
import { useThemeContext } from '../../context/ThemeContext';

export const Typography = ({ children, variant, registerRedirect }) => {
  const { theme } = useThemeContext();
  switch (variant) {
    case 'h1':
      return (
        <h1
          className={`T__h1 ${
            theme === THEMES.DARK ? "light" : "dark"
          }`}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={`T__h2 ${
            theme === THEMES.DARK ? "light" : "dark"
          }`}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={`T__h3 ${
            theme === THEMES.DARK ? "light" : "dark"
          }`}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={`T__h4 ${
            theme === THEMES.DARK ? "light" : "dark"
          }`}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          className={`T__h5 ${
            theme === THEMES.DARK ? "light" : "dark"
          }`}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6
          onClick={registerRedirect ? registerRedirect : () => {}}
          className={`T__h6 ${
            theme === THEMES.DARK ? "light" : "dark"
          }`}>
          {children}
        </h6>
      );
    case 'body1':
      return (
        <p
          className={`T__body1 ${
            theme === THEMES.DARK ? "light" : "dark"
          }`}>
          {children}{' '}
        </p>
      );
    case 'body2':
      return (
        <p
          className={`T__body2 ${
            theme === THEMES.DARK ? "light" : "dark"
          }`}>
          {children}{' '}
        </p>
      );
    case 'span':
      return (
        <span
          className={`T__span ${
            theme === THEMES.DARK ? "light" : "dark"
          }`}>
          {children}{' '}
        </span>
      );
    case 'caption':
      return (
        <span
          className={`T__caption ${
            theme === THEMES.DARK ? "light" : "dark"
          }`}>
          {children}{' '}
        </span>
      );
    default:
      break;
  }
};
