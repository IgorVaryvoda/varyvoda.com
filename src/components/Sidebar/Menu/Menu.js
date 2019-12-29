import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

const Menu = ({ menu }) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li class="menu__list-item">
      <a class="menu__list-item-link" href="https://docs.google.com/forms/d/e/1FAIpQLSd62z2gG7dCch_WAadc9G3Zic1HyWhGzxyTLp3pUE8SxylhHA/viewform">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Menu;
