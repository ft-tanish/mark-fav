import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import PostList from './PostList'
import Error from './Error';
import ProfileCard from './ProfileCard';

function App() {

  return (
    <div >
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PostList />,
  },
  {
    path: "profile/:id",
    element: <ProfileCard />,
  },
  {
    path: "/",
    element: <Error />,
  },
])