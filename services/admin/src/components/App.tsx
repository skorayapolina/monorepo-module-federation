import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <h1>About App</h1>
      <Outlet />
    </div>
  );
};
