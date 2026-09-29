import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Main } from './SharedLayout.styled';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          {/* <NavLink to="/movies/:movieId">Home</NavLink> */}
        </Header>
        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Main>
      </Container>
    </>
  );
};

export default SharedLayout;
