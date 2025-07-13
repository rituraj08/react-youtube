import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import Demo from "./components/Demo";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/watch",
          element: <WatchPage />,
          children: [],
        },
        {
          path: "/",
          element: <MainContainer />,
          children: [],
        },
         {
          path: "/demo",
          element: <Demo/>,
          children: [],
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter}></RouterProvider>
        {/* <Body /> */}
      </Provider>
    </>
  );
}

export default App;
