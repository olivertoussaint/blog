import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

function Navigation() {
  return (
      <ul>
        <NavigationItem to="/">Accueil</NavigationItem>
        <NavigationItem to="/articles">Articles</NavigationItem>
        <NavigationItem to="/contact">Contact</NavigationItem>
      </ul>
  );
}

export default Navigation;
