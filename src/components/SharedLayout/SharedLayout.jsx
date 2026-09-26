import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        {/* <NavLink to="/movies/:movieId">Home</NavLink> */}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
