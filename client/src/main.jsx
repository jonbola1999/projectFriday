import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Topic from './components/Topic.jsx'


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Topic />,
        },
    ]
    }
])



createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
