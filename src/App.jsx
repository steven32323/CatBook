import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import NewsFeed from "./components/Newsfeed";
import RootLayout from "./pages/Root";
import Profile from "./pages/Profile";
import Contacts from "./components/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <div className="body">
            <Menu />
            <NewsFeed />
            <Contacts />
          </div>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
