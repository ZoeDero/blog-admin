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
import TagDetailScreen from './screens/TagDetailScreen';
import ThemeDetailScreen from './screens/ThemeDetailScreen';
import ArticleDetailScreen from './screens/ArticleDetailScreen';
import AppUserDetail from './screens/AppUserDetail';


function App() {


  return(

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<BaseScreen/>}>
        <Route index element = {<LandingScreen/>}/>
        <Route path="/login" element = {<LoginScreen/>}/>
        <Route path="/appuser/:id" element = {<AppUserDetail/>}/>
       
        <Route path="/accounts" element = {<AccountScreen/>}/>
        <Route path="/articles" element = {<ArticleScreen/>}/>
        <Route path="/article/:id" element={<ArticleDetailScreen/>} />
        <Route path="/tags" element = {<TagScreen/>}/>
        <Route path="/tag/:id" element = {<TagDetailScreen/>}/>
        <Route path="/themes" element = {<ThemeScreen/>}/>
        <Route path="/themes/:id" element={<ThemeDetailScreen/>}/>
        <Route path="*" element = {<h1>404 Not Found</h1>}/>
        </Route>
      </Routes>   
    </BrowserRouter>
    
  
  
  
    );
}

export default App;
