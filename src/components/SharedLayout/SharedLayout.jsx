import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Link, Main } from './SharedLayout.styled';
import { Suspense } from 'react';

const SharedLayout = () => {
  const location = useLocation();

  const pathSegments = location.pathname.split('/');
  const baseMoviePath = pathSegments.slice(0, 3).join('/');

  return (
    <>
      <Container>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          {/* <NavLink to="/movies/:movieId">Home</NavLink> */}
        </Header>
        <Main>
          <Suspense key={baseMoviePath} fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Main>
      </Container>
    </>
  );
};

export default SharedLayout;
