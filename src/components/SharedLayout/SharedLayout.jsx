import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Main } from './SharedLayout.styled';

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
          <Outlet />
        </Main>
      </Container>
    </>
  );
};

export default SharedLayout;
