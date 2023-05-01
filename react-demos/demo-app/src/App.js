import './App.css';
import Demo1 from './hooks/Demo1';
import GitHubUser from './hooks/GitHubUser';
import CounterWithReducer from './hooks/CounterWithReducer';

import { Router } from '@reach/router';
import Home from './components/Home';
import ColorHome from './demo2/ColorHome';
import ContextHome from './demo2/ContextHome';
import Counter from './components/Counter';
import ReduxHome from './components/ReduxHome';

function App() {
  // // Understanding routing
  return (
    <div>
      <Router>
        <Home path="/" />
        <GitHubUser login="vlaksush-outlook" path="/github" />
        <CounterWithReducer path="/reducer" />
        <ColorHome path="/color" />
        <Demo1 path="/hook" />
        <ContextHome path="/context" />
        <ReduxHome path="/redux" />
      </Router>

    </div>
  )
}

export default App;








// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import EmployeeList from './components/EmployeeList';
// function App() {

//     const employeeList = [
//       {id:101,name:"Ram",salary:1000,projects:['ABC','XZY','Project2']},
//       {id:102,name:"Shiva",salary:4000,projects:['Project1','Prject3','Project2']},
//       {id:103,name:"Krishna",salary:3500,projects:['ABC','XZY','Project3']},
//       {id:104,name:"Harish",salary:2300,projects:['ABC','Project2']},
//     ]



//   return (
//     <div>
//      <EmployeeList employeeList={employeeList} />

//     </div>
//   );
// }

// export default App;



