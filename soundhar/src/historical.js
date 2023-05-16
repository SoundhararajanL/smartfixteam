import Navbar from './Navbar';
import Dashboard from './dashboard';
import { useLocation , useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Historical() {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state

 const handleClick = () =>{
  navigate("/hisdash", { state: data })
 }
  return (

    <div>
      <div>
        <Navbar />
        <Dashboard />
      </div>
      <div className='font1'>
        <p>{data}</p>
      </div>
      <div class="react-card">
        <nav>
          <ul>
            <li><a href="#">SFXFNGCU2001</a></li>
            <li><a href="#">Pie Chart</a></li>
            <li><a href="#">OEE</a></li>
            <Link to='/hisdash'><li onClick={(e)=> handleClick}>Historical</li></Link>
            <li><a href="#">Download CSV</a></li>
            <li><a href="#">Anomaly Detection</a></li>
          </ul>
        </nav>
      </div>

    </div>





  );
}

export default Historical;



