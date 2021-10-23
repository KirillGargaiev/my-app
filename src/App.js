import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <MenuBar dialogsData={props.state.messagesPage.dialogsData} messagesData={props.state.messagesPage.messagesData}/>
        <div className="app-wrapper-content">
          <Route path='/profile' render={ ()=> <Profile store={props.store}/> } />
          <Route path='/dialogs'  render={ ()=> <DialogsContainer store={props.store}/> } />
          <Route path='/news'  render={ ()=> <News/> } />
          <Route path='/music'  render={ ()=> <Music/> } />
          <Route path='/settings'  render={ ()=> <Settings/> } />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
