import ErrorPage from './error.tsx';
import App from './routes/App.tsx';
import Chat from './routes/chat/Chat.tsx';
import Onboarding from './routes/onboarding/Onboarding.tsx';
import Create from './routes/onboarding/create/Create.tsx';

export const enum RoutePaths {
  ROOT = '/',
  ONBOARDING = '/onboarding',
  CREATE_PROFILE = `${RoutePaths.ONBOARDING}/create`,
  CHAT = '/chat',
}

export const routes = [
  {
    path: RoutePaths.ROOT,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `${RoutePaths.CHAT}`,
        element: <Chat />,
        // children: [
        //   {
        //     path: '/:id',
        //     element: <Chat />,
        //   },
        // ],
      },
      {
        path: RoutePaths.ONBOARDING,
        element: <Onboarding />,
      },
      {
        path: RoutePaths.CREATE_PROFILE,
        element: <Create />,
      },
    ],
  },
];