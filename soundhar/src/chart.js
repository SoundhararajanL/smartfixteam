/*eslint-disable*/
import * as React from 'react';
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import csvData from './datafile.csv';
function Chart_data() {
    const [Date, setDate] = React.useState()
    const [Value, setValue] = React.useState()

    React.useEffect(() => {
        Papa.parse(csvData, {
            download: true,
            complete: handleParseComplete,
            header: true
 
        });
    }, [])

    const handleParseComplete = (results) => {
        const date = [];
        const value = [];
        const parsedData = results.data;
        for (let i = 0; i < parsedData.length; i++) {
            date.push(parsedData[i].resample_timestamp),
                value.push(parsedData[i].SFXFNGCU2003_vibration_2)
        }
        setDate(date)
        setValue(value)

    }

    return (
        <div className='Chart-style' >
            <Line
                datasetIdKey='id'
                data={{
                    labels: Date,
                    datasets: [
                        {
                            id: 1,
                            label: 'Vibration',
                            data: Value,
                        }
                    ],
                }}
            />

        </div >
    );
}
export default Chart_data;