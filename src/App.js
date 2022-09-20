import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import BaseScreen from './screens/BaseScreen';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import AccountScreen from './screens/AccountScreen';
import ArticleScreen from './screens/ArticleScreen';
import ThemeScreen from './screens/ThemeScreen';
import TagScreen from './screens/TagScreen';


function App() {


  return(

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<BaseScreen/>}>
        <Route index element = {<LandingScreen/>}/>
        <Route path="/login" element = {<LoginScreen/>}/>
        <Route path="/appusers" element = {<h1>List of users</h1>}/>
        <Route path="/accounts" element = {<AccountScreen/>}/>
        <Route path="/articles" element = {<ArticleScreen/>}/>
        <Route path="/tags" element = {<TagScreen/>}/>
        <Route path="/themes" element = {<ThemeScreen/>}/>
        <Route path="*" element = {<h1>404 Not Found</h1>}/>
        </Route>
      </Routes>   
    </BrowserRouter>
    
  
  
  
    );
}

export default App;
