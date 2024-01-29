import React from 'react'
import ReactDOM from 'react-dom/client'
import routes, {RouterProvider} from './routes'
import './assets/css/tailwind.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)