import './App.css'
import Historical from './historical';
import Chart from './chart';
import { useState } from 'react';
function Hisdash() {
    const [Chart_Called, setChart_Called] = useState(false);
    
    return (

        <div>
            <div>
                <Historical />
            </div >
            <div className='selection'>
                <table>
                    <tr>
                        <td><label for="fixture-select">Select Fixture:</label></td>
                        <td><select id="fixture-select">
                            <option disabled value='default' selected>Select Fixture</option>
                            <option value="fixture 2">Fixture 2</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td> <label for="data-view-select">Select Data View:</label></td>
                        <td> <select id="data-view-select">
                            <option disabled value='default' selected>Select option</option>
                            <option value="Graphical Data">Graphical Data</option>
                            <option value="Download Data as CSV">Download Data as CSV</option>
                            <option value="Toolbreakage and High pressure">Toolbreakage and High pressure</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td><label for="date-picker">Pick Date:</label>
                        </td>
                        <td><input type="date" id="date-picker" /></td>
                    </tr>
                    <tr>
                        <td> <label for="cycle-select">Select Time Cycle:</label></td>
                        <td>  <select id="cycle-select">
                            <option disabled value='default' selected>Select Cycle</option>
                            <option value="(06AM to 02PM)">1(06AM to 02PM)</option>
                            <option value="(02PM to 10PM)">2(02PM to 10PM)</option>
                            <option value="(10PM to 06AM)">3(10PM to 06AM)</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td> <label for="sensor-type-select">Select Sensor Type:</label></td>
                        <td> <select id="sensor-type-select">
                            <option disabled value='default' selected>Select Sensor</option>
                            <option value="battery">battery</option>
                            <option value="power">power</option>
                            <option value="pressure">pressure</option>
                            <option value="proximity">proximity</option>
                            <option value="temperature">temperature</option>
                            <option value="tool_count">tool_count</option>
                            <option value="vibration">vibration</option>
                        </select></td>
                    </tr>

                </table>
                <div >
                    <input onClick={(e) => setChart_Called(true)} type="submit" value="Submit" />
                </div>
            </div>





            {Chart_Called ?
                <div >
                    <Chart />
                </div> : <></>
            }
        </div>
    );
}

export default Hisdash;