import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from './UserName';

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-200 bg-yellow-500 p-2 uppercase sm:items-center sm:p-4">
      <Link to="/" className="font-semibold tracking-widest sm:text-2xl">
        Fast-react-pizza & co.
      </Link>
      <SearchOrder />
      <div className="hidden text-3xl md:block">
        <UserName />
      </div>
    </header>
  );
}

export default Header;
