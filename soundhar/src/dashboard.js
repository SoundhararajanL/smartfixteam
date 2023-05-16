import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div style={{paddingTop : "80px"}}>
            <div className="font">
                <h4>APPLICATION</h4>
            </div>
            <div className="navbar-items-left">
                <nav>
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <Link to='/home'><li>Home</li></Link>

                    </ul>
                </nav>

            </div>
        </div>




    );
}

export default Dashboard;