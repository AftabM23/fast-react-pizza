/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to, onClick }) {
  const className = 'text-blue-500 underline hover:text-blue-800';
  const navigate = useNavigate();

  if (onClick === 'navigate(-1)') {
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
