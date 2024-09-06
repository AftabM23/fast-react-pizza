import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="m-5 p-5 text-center font-bold md:text-3xl">
      <h1 className="c mb-3 p-5 text-xl font-semibold text-stone-700 md:text-2xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
