import React from 'react';

import styles from './Navbar.scss';

export interface NavbarProps {
  prop?: string;
}

export function Navbar({prop = 'default value'}: NavbarProps) {
  return <div className={styles.Navbar}>Navbar {prop}</div>;
}
