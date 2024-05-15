import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import LoadingSkeleton from '../components/Loading/LoadingSkeleton';
const CreatePage = lazy(() => import('../pages/CreatePage'));
const EditPage = lazy(() => import('../pages/EditPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'create',
    element: (
      <Suspense fallback={<LoadingSkeleton />}>
        <CreatePage />
      </Suspense>
    ),
  },
  {
    path: 'edit/:id',
    element: (
      <Suspense fallback={<LoadingSkeleton />}>
        <EditPage />
      </Suspense>
    ),
  },
]);

export default router;
