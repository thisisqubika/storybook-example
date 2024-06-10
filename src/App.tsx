import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ROUTES from './routes';
import { ThemeWrapper } from './common/themes';
import { QueryClientWrapper } from './common/query';

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <ThemeWrapper>
      <QueryClientWrapper>
        <RouterProvider router={router} />
      </QueryClientWrapper>
    </ThemeWrapper>
  );
} // function App

export default App;
