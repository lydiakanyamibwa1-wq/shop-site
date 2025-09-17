import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutHandling from './LayoutFolder/Layout';
import Homepage from './components/home';
import FAQ from './components/FAQ';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Cart from './components/Cart';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPasswordModel from './components/ForgotPasswordModel';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Site Routes */}
        <Route path="/" element={<LayoutHandling />}>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />

          {/* Modals (login/signup/forgot password) */}
          <Route path="login" element={<LoginForm onClose={() => {}} />} />
          <Route path="signup" element={<SignupForm onClose={() => {}} />} />
          <Route path="forgot-password" element={<ForgotPasswordModel onClose={() => {}} />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard/*" element={<Dashboard />} />

        {/* Fallback 404 */}
        <Route
          path="*"
          element={
            <div className="p-6 text-center text-2xl">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
