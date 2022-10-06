
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import FriendDetails from './Component/FriendDetails/FriendDetails';
import Friends from './Component/Friends/Friends';
import Home from './Component/Home/Home';
import Main from './Component/Layout/Main';
import PostDetails from './Component/PostDetails/PostDetails';
import Products from './Component/Products/Products';
import Posts from './Post/Posts';

function App() {
  const router = createBrowserRouter([
      {path:'/', element:<Main></Main>,
      children:[
        {path:'/', element:<Home></Home>},
        {path:'/home', element:<Home></Home>},
        {path:'products',element:<Products></Products>},
        {path:'friends',
        loader:async()=>{
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
        element:<Friends></Friends>},
        {
          path:'/friend/:friendId',
          loader:async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)

          },
          element:<FriendDetails></FriendDetails>
        },
        {
          path:
          'posts',
          loader:async()=>{
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element:<Posts></Posts>
        },
        {
          path:'/post/:postId',
          loader:async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element:<PostDetails></PostDetails>
        }

      ]},
      
      {path:'/about', element:<About></About>},
      {path:'*',element:<div>404 error</div>}
      
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
