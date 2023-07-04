
import { useState } from 'react';
import './App.css';
// import About from './components/About';

import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const[mode ,setMode]=useState('light');

  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode= ()=>{
    if(mode === 'light'){

      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title='textUtlis - Dark Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success")
      document.title='textUtlis - Light Mode'
    }
  }
  return (
<>
  {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}

  {/* <Router> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  {/* <Navbar /> */}
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Routes>
          <Route exact path="/about"
            element={ <About />}
          /> */}
         
          {/* <Route exact path="/" */}
           {/* element={ <TextForms showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>} */}

          <TextForms showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
            
          {/* /> */}
  {/* </Routes> */}
   </div>
  {/* </Router> */}
  {/* {<About/>}  */}

</>
);
}

export default App;
