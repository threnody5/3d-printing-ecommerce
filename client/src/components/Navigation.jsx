import { Link } from 'react-router-dom';
import './styles.css';

const Navigation = () => {
  return (
    <nav className='navigation-container'>
      <div className='navigation-container__links'>
        <div className='navigation-container__company'>
          <Link to='/'>Maker Market</Link>
        </div>
        <div>
          <Link to='/our-story'>Our Story</Link>
          <Link to='/reviews'>Reviews</Link>
          <Link to='/rewards'>Rewards</Link>
          <Link to='/products'>Products</Link>
        </div>
        <div>
          <div className='navigation-container__cart_account'>
            <Link to='/cart'>Cart</Link>
            <Link to='/account'>Account</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
