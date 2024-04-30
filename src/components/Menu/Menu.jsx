import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <nav>
        <NavLink to="." end>
          Головна
        </NavLink>
        <NavLink to="catalog">Каталог</NavLink>
        <NavLink to="contacts">Контакти</NavLink>
        <NavLink to="about">Про нас</NavLink>
      </nav>
    </>
  );
};

export default Menu;
