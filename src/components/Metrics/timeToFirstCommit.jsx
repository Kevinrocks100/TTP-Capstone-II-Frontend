import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

function TimeToFirstCommit({ repo, owner, name }) {
    const [chartData, setChartData] = useState(null);
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    // Fetch data from the endpoint
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/time_to_first_comment/${owner}/${name}/pull_data`)
            .then(response => {
                console.log(response)
                // Process data and setChartData
                const processedData = processResponseData(response.data);
                setChartData(processedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const processResponseData = rawData => {
        // Process and extract data for the charts
        // You can extract mergeDurations and averageDuration here
        const dataElements = rawData.map(data => `PR ${data.number}`);
        // Create the appropriate data format for Chart.js
        // Example:
        const durations = rawData.map(data => data.timeToFirstComment);
        const chartData = {
            datasets: [
                {
                    data: durations,
                },
            ],
        };
        return chartData;
    };

    return (
        <div>
            {chartData && (
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Chart.js Line Chart',
                            },
                        },
                    }}
                />
            )}
        </div>
    );
}

export default TimeToFirstCommit;