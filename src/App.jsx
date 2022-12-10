import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/Error/ErrorPage';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import ProfilePage from './pages/Profile/ProfilePage';
import SignupPage from './pages/Signup/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
