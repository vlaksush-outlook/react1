import logo from './logo.svg';
import './App.css';
import StarRating from './demo2/StarRating';
import colorData from './demo2/color-data.json';
import ColorList from './demo2/ColorList';
import { useState } from 'react';
import Color from './demo2/Color';
import AddColorForm from './demo2/AddColorForm';
import { v4 } from 'uuid'
import A from './context/A';
import NameContext from './context/mycontext';
import Demo1 from './hooks/Demo1';
import Demo2 from './hooks/Demo2';
import CounterWithState from './hooks/CounterWithState';
import GitHubUser from './hooks/GitHubUser';
function App() {

  const [colors, setColors] = useState(colorData);

  const removeColor = (id) => {
    const newColors = colors.filter(color => color.id !== id)
    setColors(newColors);
  }

  const rateColor = (id, rating) => {
    const newColors = colors.map(color =>
      color.id == id ? { ...color, rating } : color
    )
    setColors(newColors);
  }


  /*
  color => 101 fav1 red 2
  color => 102 fav2 green 3
  color => 103 fav3 blue 2
  */

  const createColor = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        title: title,
        color: color,
        rating: 0
      }
    ]
    setColors(newColors);
  }

  // return (
  //   <div>

  //  <AddColorForm 
  //  onNewColor={createColor}
  //  />

  //    <ColorList 
  //    colors = {colors} 
  //    onRemoveColor={removeColor}
  //    onRateColor = {rateColor}
  //    />
  //   </div>
  // );





  // // // Understanding Context API
  // const [orgName, setOrgName] = useState("ABC Technologies");
  // const myfun = (data) => {
  //   console.log(data)
  // }
  // return (
  //   <div>
  //     <NameContext.Provider value={orgName}>
  //     <App />
  //     </NameContext.Provider>
  //   </div>
  // )


  // // // Understanding useEffect
  // return (
  //   <div>

  //   <h2>useEffect Demo</h2>
  //   <Demo1 />

  //   </div>
  // )


  //  // // Understanding useReducer
  //  return (
  //   <div>

  //   <h2>useReducer Demo</h2>
  //   <CounterWithReducer />

  //   </div>
  // )



  // // Understanding fetching Data with useEffect
  return (
    <div>

      <h2>Fetching Data Demo</h2>
      <GitHubUser login="vlaksush-outlook" />

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



