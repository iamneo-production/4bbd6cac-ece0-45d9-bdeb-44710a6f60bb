import { BrowserRouter ,Routes, Route, Form  } from 'react-router-dom';
import Login from './Components/Login';
 import Home from './Components/Home';
 import  RegisterForm from './Components/RegisterForm';
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import ServicePage from './Components/ServicePage';
import ProfilePage from './Components/ProfilePage';
import Pricing from './Components/Pricing';
import Signuser from './Components/Signuser';
import { Provider } from 'react-redux';
import store from './Components/store';
import Signup from './Components/SignUp';
import  FeedForm from './Components/FeedForm';




function App() {
return (

    <Provider store = {store}>
    
    
     <BrowserRouter> 
    <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/login' element ={<Login/>}></Route>
        <Route path='/signup' element ={<Signup/>}></Route>
        <Route path='/hom' element ={<HomePage/>}></Route>
        <Route path='/con' element ={<Contact/>}></Route>
        <Route path='/out' element ={<Home/>}></Route>
        <Route path='/ser' element ={<ServicePage/>}></Route>
        <Route path='/register' element ={<RegisterForm/>}></Route>
        <Route path='/home' element ={<HomePage/>}></Route>
        <Route path='/profile1' element ={<ProfilePage/>}></Route>
        <Route path='/p' element ={<Pricing/>}></Route>
        <Route path='/signuser' element ={<Signuser/>}></Route>
          <Route path='/fee' element ={<FeedForm/>}></Route>
          <Route path='/signups' element ={<Signup/>}></Route>
          {/* <Route path='/home' element ={<HomePage/>}></Route> */}
        
    </Routes>
    </BrowserRouter> 
   
    {/* <HomePage/> */}
    </Provider>
);
}
export default App