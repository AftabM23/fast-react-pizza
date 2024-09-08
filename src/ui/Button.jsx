import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Button({ onClick, children, disabled, to, type }) {
  // const className =
  //   'sm:pz-4 mt-2 rounded-full bg-yellow-400 p-2 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-2 focus:ring-yellow-400 disabled:cursor-not-allowed sm:px-6';
  const base =
    'sm:pz-4 text-sm rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-2 focus:ring-yellow-400 disabled:cursor-not-allowed sm:px-6  w-fit ';
  const className = {
    primary: base + ' p-2  mt-2',
    small: base + '  p-2 m-1',
    clearBtn:
      ' sm:pz-4  rounded-full hover:bg-stone-400 font-semibold uppercase text-stone-800 transition-colors duration-300 focus:bg-stone-300 focus:ring-2 focus:ring-stone-400 disabled:cursor-not-allowed sm:px-6 p-2  mt-2 border-2 ',
  };

  if (to) {
    return (
      <Link to={to} className={className[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} disabled={disabled} className={className[type]}>
      {children}
    </button>
  );
}

export default Button;
