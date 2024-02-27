import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/CreateBlog'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App