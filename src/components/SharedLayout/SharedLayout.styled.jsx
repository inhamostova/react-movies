import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  gap: 20px;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
`;

export const Link = styled(NavLink)`
  padding: 10px 10px;
  color: currentColor;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
  transition: background-color 250ms ease-in;

  &.active {
    background-color: #9ec5ec;
  }
`;

export const Main = styled.main`
  padding: 20px 0;
`;
