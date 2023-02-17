import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout';
import Index from './pages/Index';
import LoginPage from './pages/LoginPage';
import CreatePost from './pages/CreatePost';
import RegisterPage from './pages/RegisterPage';
import SinglePost from './pages/SinglePost';
import EditPost from './pages/EditPost';
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />} >

      <Route index element={<Index />} />

      <Route path='/login' element={<LoginPage />} />

      <Route path='/register' element={<RegisterPage />} />

      <Route path='/create' element={<CreatePost />} />

      <Route path='/post/:id' element={<SinglePost />} />

      <Route path='/edit/:id' element={<EditPost />} />

      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
