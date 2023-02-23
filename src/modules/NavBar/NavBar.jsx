import { NavLink } from 'react-router-dom';
import css from './navbar.module.css';
import { items } from './items';

const getClassName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : css.link;
};

const NavBar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={getClassName} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={css.menu}>{elements}</ul>;
};

export default NavBar;
