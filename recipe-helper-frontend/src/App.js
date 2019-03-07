import React, { Component } from 'react';
import logo from './salad.svg';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
class App extends Component {
render() {
return (
<div className="App">


   <div id="cover">
      <form method="get" action="">
         <div class="tb">
            <div class="td"><input type="text" placeholder="Search" required /></div>
            <div class="td" id="s-cover">
            <button type="submit">
               <div id="s-circle"></div>
               <span></span>
            </button>
            </div>
         </div>
      </form>
   </div>
   


   <header className="App-header">
      <i class="fas fa-bacon"></i>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
         Chef it! WIP
      </p>
      <a
         className="App-link"
         href="https://www.acmutd.co/"
         target="_blank"
         rel="noopener noreferrer"
         >
      Learn more about what we do at ACM!
      </a>
   </header>
   <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

      {/* side nav */}

</div>
);
}
}
export default App;