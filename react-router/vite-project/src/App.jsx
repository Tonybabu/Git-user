
import {Routes,Route,Link,useLocation} from  "react-router-dom"
// import Users from "./components/Users"
import "./App.css"
// import NavBar from "./components/NavBar"
// import UserProfile from "./components/UserProfile"
// import SearchUser from "./components/SearchUser"
// import AuthProfile from "./components/AuthProfile"
// import Login from "./components/Login"
import {SwitchTransition,CSSTransition} from "react-transition-group"
import React,{Suspense} from "react"

const Users=React.lazy(()=>import("./components/Users"))
const SearchUser=React.lazy(()=>import("./components/SearchUser"))
const Login=React.lazy(()=>import("./components/Login"))
const AuthProfile=React.lazy(()=>import("./components/AuthProfile"))
const UserProfile=React.lazy(()=>import("./components/UserProfile"))


const Home=()=>{
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">Go to aboutUs page</Link>
      <br />
      <Link to="/users">Go to Users page</Link>

    </>
  )
}
const AboutUs=()=>{
  return (
    <>
      <h1>AboutUs Page</h1>
      <Link to="/">Go to Home page</Link>
      <br />
      <Link to="/users">Go to Users page</Link>

    </>
  )
}

const NotFound=()=>{
  return(
    <>
    <div>
      <h1>Page Not Found</h1>
      <Link to={"/"}>Go Back to Home page</Link>
    </div>
    </>
  )
}


function App() {
  const location=useLocation()

  return (
    <>
    <SwitchTransition component={null}>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300} unmountOnExit>
     <Suspense fallback={()=><h1>Loading.....</h1>}>
     <Routes location={location}>
          <Route  path="/" element={<Home/>}  />
          <Route  path="/about" element={<AboutUs/>}  />
          <Route  path="/users" element={<Users/>}  />
          <Route  path="/users/user/:username" element={<UserProfile/>} />
          <Route path="/search" element={<SearchUser/>} />
          <Route path="/authProfile" element={<AuthProfile/>} />
          <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
     </Suspense>
      </CSSTransition>
    </SwitchTransition>
  
    </>
  )
}

export default App
