

import './App.css'
import Navber from './components/Navber';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
 
  
return (
  <>
   <Navber title="TextUtils"/>
   <div className="container my-3">
    <TextForm heading="Enter the text to analyze" /> 
    </div>
     <About></About>
  
 </>
);
} 
export default App
