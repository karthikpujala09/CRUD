// import React from "react"
// import Navbar from "./components/Navbar"
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Assessment from "./pages/Assessment"
// import Classroom from "./pages/Classroom"
// import Dashboard from "./pages/Dashboard"
// import Store from "./pages/Store"
// import Calender from "./pages/Calender"
// import News from "./pages/News"
// import Blog from "./pages/Blog"
// import PageNotfound from "./pages/PageNotfound"
// const App = () => {
//   return (
//     <BrowserRouter>
//     <Navbar/>
//     <Routes>
//         <Route path="/" element={<Dashboard/>} ></Route>
//         <Route path="/classroom" element={<Classroom/>} ></Route>
//         <Route path="/assessment" element={<Assessment/>} ></Route>
//         <Route path="/store" element={<Store/>} ></Route>
//         <Route path="/calender" element={<Calender/>} ></Route>
//         <Route path="/news" element={<News/>} ></Route>
//         <Route path="/blog" element={<Blog/>} ></Route>
//         <Route path="*" element={<PageNotfound/>} ></Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
// import React from 'react'
// import {BrowserRouter , Routes , Route} from "react-router-dom";
// import Home from './crudcomponents/Home';
// import Create from './crudcomponents/Create';
// import Edit from './crudcomponents/Edit';
// import {ToastContainer} from "react-toastify"
// const App = () => {
//   return (
//     <BrowserRouter>
//     <ToastContainer/>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/create' element={<Create/>}/>
//       <Route path='/edit/:userId' element={<Edit/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React from 'react'
import BookContainer from './redux/reduxcomp/BookContainer'
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BookContainer/>
    </Provider>
  )
}
export default App