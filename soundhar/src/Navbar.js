import logo from './smartfixlogo.png';
import logo2 from './chart.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    
    <div className='fixed-top top_fixed bg-light' >
      <div><img src={logo} alt='logo' className="logo" /></div>
      <div><img src={logo2} alt='logo2'  className="second-image" /> </div>
     
           
     </div>
    
  );
}

export default App;