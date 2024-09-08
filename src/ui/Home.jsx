import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.userName);
  return (
    <div className="relative top-[20%] m-5 flex flex-col items-center p-5 text-center align-middle font-bold md:text-3xl">
      <h1 className="mb-3 p-5 text-xl font-semibold text-stone-700 md:text-3xl">
        <span>The best pizza.</span>
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
