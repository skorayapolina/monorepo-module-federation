import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <h1>Shop App</h1>
      <Outlet />
    </div>
  );
};
