import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';

export const App = () => {
  return (
    <div data-testid="test-is-div">
      <h1>Page</h1>
      <ul>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/shop'}>Shop</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
