import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const PATHS = {
  books: 'books',
}; // const PATHS

export function ErrorBoundary() {
  const error: unknown = useRouteError();
  return isRouteErrorResponse(error) ? (
    <h1>{error.status} {error.statusText}</h1>
  ) : (
    <h1>{(error as Error)?.message ?? error}</h1>
  );
} // function ErrorBoundary
