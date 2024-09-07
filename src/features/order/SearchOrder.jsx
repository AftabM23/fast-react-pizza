import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId) return;
    navigate(`/order/${orderId}`);
    setOrderId('');
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Enter order #"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="rounded-full bg-yellow-200 text-center transition-all duration-300 placeholder:text-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-600 md:h-8 md:w-72 md:focus:w-80"
        />
      </form>
    </div>
  );
}

export default SearchOrder;
