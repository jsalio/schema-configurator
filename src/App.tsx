import './App.css';
import LoginScreen from './pages/login';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApplicationLayout } from './shared/layout';
import { Dashboard } from './pages/Dashboard';
import { buildSynchronizerPath } from './pages/Sync';
import { buildSettingSectionsPaths } from './pages/Configuration';
import { buildSchemaPath } from './pages/Schema';
import { ApplicationContext, IAppContext } from './Main/main.context';
import { useTranslate } from './utils/i18n/useTranslate';
import { useAppNavigation } from './utils/Navigator';

var router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Outlet />
    </div>,
    children: [
      {
        path: "/app",
        element: <div>
          <ApplicationLayout>
            <Outlet />
          </ApplicationLayout>
        </div>,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          },
          buildSettingSectionsPaths(),
          buildSchemaPath(),
          buildSynchronizerPath()
        ]
      },
      {
        path: "/auth",
        element: <LoginScreen />
      }
    ]
  }
]);

export default function App() {
  const {translate, changeLanguage: chageLanguage} = useTranslate();

  let context:IAppContext={
    // eslint-disable-next-line react-hooks/rules-of-hooks
    router:() => useAppNavigation(),
    translate:translate,
    changeLanguage:chageLanguage
  }

  return (
    <ApplicationContext.Provider value={context}>
      <RouterProvider router={router} />
    </ApplicationContext.Provider>
  );
}