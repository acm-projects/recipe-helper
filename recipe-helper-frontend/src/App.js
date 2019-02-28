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
   <input type="text" placeholder="Search.."></input>
   <header className="App-header">
      <i class="fas fa-bacon"></i>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
         Recipe Helper WIP
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
   <SideNav
      onSelect={(selected) =>
      {
      // Add your code here
      }}
      >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
         <NavItem eventKey="home">
            <NavIcon>
               <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
               Home
            </NavText>
         </NavItem>
         <NavItem eventKey="charts">
            <NavIcon>
               <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
               Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
               <NavText>
                  Line Chart
               </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
               <NavText>
                  Bar Chart
               </NavText>
            </NavItem>
         </NavItem>
      </SideNav.Nav>
   </SideNav>
</div>
);
}
}
export default App;