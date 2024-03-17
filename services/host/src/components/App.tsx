import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import cactusPng from '@/assets/cactus.png';
import cactusJpg from '@/assets/cactus.jpg';
import HoodSvg from '@/assets/hood.svg';
import classes from './App.module.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => ++prev)
  }

  // // tree shaking
  // if (__PLATFORM__ === 'mobile') {
  //   return 'IS_MOBILE';
  // }
  // // tree shaking
  // if (__PLATFORM__ === 'desktop') {
  //   return 'IS_DESKTOP';
  // }

  return (
    <div data-testid="test-is-div">
      <div>
        <img width={100} height={100} src={cactusPng} alt="" />
        <img width={100} height={100} src={cactusJpg} alt="" />
        <HoodSvg style={{ color: 'coral' }} width={80} height={80} />
      </div>
      <div>
        <Link to={'/about'}>About</Link>
        <Link to={'/shop'}>Shop</Link>
      </div>
      <section>
        <div>{count}</div>
        <button className={classes.button} onClick={increment}>Increment</button>
      </section>
      <Outlet />
    </div>
  );
};
