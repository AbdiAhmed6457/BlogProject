import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Header from './components/Header'
import UpdatePost from './pages/UpdatePost';
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost';
import Projects from './pages/Project'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRout';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScroollToTop'
import Search from './pages/Search'

export default function App() {
  return (
    <BrowserRouter >
    <ScrollToTop/>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>

        <Route path='/projects' element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
