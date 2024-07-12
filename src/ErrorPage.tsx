import { useRouteError } from 'react-router-dom';
import errorImage from './assets/404.jpg';

interface RouteError {
  statusText?: string;
  message?: string;
}

function isRouteError(error: unknown): error is RouteError {
  return (
    typeof error === 'object' && error !== null && ('statusText' in error || 'message' in error)
  );
}

export default function ErrorPage() {
  const error = useRouteError();

  if (!isRouteError(error)) {
    return <div>Unexpected error format</div>;
  }

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="error-image">
        <img src={errorImage} alt="picture_fake" />
      </div>
    </div>
  );
}
