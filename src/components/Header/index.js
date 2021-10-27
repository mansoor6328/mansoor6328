import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.css';
import MenuIcon from '../../assets/icons/menu.svg';

const Header = ({ routes }) => (
  <header>
    <div>
      <div className="logo">
        <span>Yagnesh</span>
      </div>
      {/* <MenuIcon height={24} width={24} fill="red" /> */}
      <nav>
        <ul>
          {routes.map((x) => (
            <li key={x.path}>
              <Link to={x.path}>{x.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
