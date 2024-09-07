import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="relative top-[20%] m-5 flex flex-col p-5 text-center align-middle font-bold md:text-3xl">
      <h1 className="mb-3 p-5 text-xl font-semibold text-stone-700 md:text-3xl">
        <span>The best pizza.</span>
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
