import React from 'react';
import { NavLink } from 'react-router-dom';
import Restaurant from '../../interfaces/restaurant';
import { NavContainer } from './RestaurantNavbar.styled';

interface RestaurantNavbarProps {
  restaurants: Restaurant[];
}

const RestaurantNavbar: React.FC<RestaurantNavbarProps> = ({ restaurants }) => {
  return (
    <NavContainer>
      <button>All</button>
      <button>New</button>
      <button>Most Popular</button>
      <button>Open Now</button>
    </NavContainer>
  );
};

export default RestaurantNavbar;
