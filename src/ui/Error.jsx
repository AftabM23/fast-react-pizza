import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function NotFound() {
  const errorMessage = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorMessage.data || errorMessage.message}</p>

      <LinkButton onClick="navigate(-1)">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
