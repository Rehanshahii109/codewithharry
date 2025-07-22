

import './App.css'
import Navber from './components/Navber';
import TextForm from './components/TextForm';


function App() {
 
  
return (
  <>
   <Navber title="TextUtils"/>
   <div className="container my-3">
   <TextForm heading="Enter the text to analyze" />
   </div>
 </>
);
} 
export default App
