import logo from './logo.svg';
import './App.css';
import StarRating from './demo2/StarRating';
import colorData from './demo2/color-data.json';
import ColorList from './demo2/ColorList';
import { useState } from 'react';
function App() {

  const[colors,setColors]= useState(colorData);

  return (
    <div>
   
     <ColorList colors = {colors} />
    </div>
  );
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



