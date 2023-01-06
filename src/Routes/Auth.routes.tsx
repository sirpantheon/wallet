import { Route, BrowserRouter, Routes } from 'react-router-dom'
import SignIn from '../Pages/Signin'

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}