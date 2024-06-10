import { createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { PATHS } from "./common";

const ROUTES = createRoutesFromElements(
  <>
    <Route
      path='/books'
      lazy={() => import('./BooksRoute')}
    />
    <Route
      element={<Navigate to={PATHS.books} replace />}
      path='*'
    />
  </>
); // const ROUTES

export default ROUTES;
