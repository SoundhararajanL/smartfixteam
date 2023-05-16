// import logo from './logo.svg';
// import logo from './smartfixlogo.png';
// import logo2 from './chart.jpg'
// import './App.css';
import Navbar from './Navbar';
import Dashboard from './dashboard';

import Machine from './machine';

function App() {
  const machines=[]
  for(let i=1;i<=15;i++){
    machines.push('Machines'+i);
  }
  console.log(machines);
  return (
   <div>
     <Navbar />
    <Dashboard />
    <div >
    <div className='abc'>
      {
        machines.map((m)=>(
          <Machine name={m} />
        ))
      }
      </div>
    </div>
    
    
    
   </div>
    
  );

}

export default App;
