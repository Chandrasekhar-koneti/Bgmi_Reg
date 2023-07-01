import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/Form/SignUp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from './components/Form/Login';
import Bgmi from './components/register/bgmi';
import Cod from './components/register/Cod';
import Home from './components/Main/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Registration from './components/register/Registration';

function App() {
  const isLoggedIn = localStorage.getItem('enteredemail')
  const router1=createBrowserRouter([
    {path:'/signin',element:<SignIn />},
    {path:'/signup',element:<SignUp />},
    {path:'/',element:<Home />},
    {path:'/bgmi',element:<Bgmi />},
    {path:'/cod',element:<Cod />},
    {path:'/about',element:<About />},
    {path:'/contact',element:<Contact />},
    {path:'/registration',element:<Registration />},
    isLoggedIn ? {path:'/registration',element:<Registration />}:{path:'/signin',element:<SignIn />}
  ])


  return (
    <>
      <RouterProvider router={router1}></RouterProvider>
    </>
  );
}

export default App;
