import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './loader/Loader';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <a href="/">
          <h2>SomeMovies</h2>
        </a>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>
      <StyledOutlet>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledOutlet>
    </>
  );
};

export default Layout;

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 40px;
  padding: 30px;
  color: #f0f5ff;
  background-color: #0b0d3f;
  h2 {
    font-size: 30px;
    margin: 0;
  }
  nav {
    display: flex;
    gap: 10px;
  }
  a {
    font-size: 20px;
    &:hover {
      color: #4582ec;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  font-weight: 700;
  padding: 5px;
  &.active {
    color: #0b0d3f;
    font-weight: 700;

    background-color: #f0f5ff;
    border-radius: 5px;
  }
`;

const StyledOutlet = styled.div`
  padding: 20px 30px;
  color: #f0f5ff;
`;
