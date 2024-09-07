import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Button({ children, disabled, to }) {
  const className =
    'sm:pz-4 mt-2 rounded-full bg-yellow-400 p-2 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-2 focus:ring-yellow-400 disabled:cursor-not-allowed sm:px-6';

  if (to) {
    return (
      <Link to={to} className={className}>
        Order pizzas
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
