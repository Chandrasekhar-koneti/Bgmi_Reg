import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/Pages/SignUp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from './components/Pages/Login';
import Dummy from './components/Main/Home';
import Bgmi from './components/Main/bgmi';
import Cod from './components/Main/Cod';

function App() {
  const router1=createBrowserRouter([
    {path:'/',element:<SignIn />},
    {path:'/signup',element:<SignUp />},
    {path:'/dummy',element:<Dummy />},
    {path:'/bgmi',element:<Bgmi />},
    {path:'/cod',element:<Cod />}
  ])
  return (
    <>
      <RouterProvider router={router1}></RouterProvider>
    </>
  );
}

export default App;
