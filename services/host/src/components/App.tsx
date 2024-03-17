import { Link, Outlet } from 'react-router-dom';
import { adminRoutes } from '@packages/shared/src/routes/admin'
import { shopRoutes } from '@packages/shared/src/routes/shop'

export const App = () => {
  return (
    <div data-testid="test-is-div">
      <h1>Page</h1>
      <ul>
        <li>
          <Link to={adminRoutes.about}>Admin</Link>
        </li>
        <li>
          Shop
          <ul>
            <li>
              <Link to={shopRoutes.main}>Shop Main</Link>
            </li>
            <li>
              <Link to={shopRoutes.second}>Shop Second</Link>
            </li>
          </ul>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
