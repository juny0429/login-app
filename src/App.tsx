import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routers } from './router'



function App() {
  return (
    <div className="content">
      <RouterProvider router={routers} />
    </div>
  )
}

export default App
