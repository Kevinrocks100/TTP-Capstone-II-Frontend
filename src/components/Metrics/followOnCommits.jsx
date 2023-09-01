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

function FollowOnCommits({ repo, owner, name }) {
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
    console.log(owner)
    console.log(name)
    // Fetch data from the endpoint
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/follow_on_commit/${owner}/${name}/pull_data`)
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
        const labels = rawData.map(pr => `PR ${pr.number}`);
        // Create the appropriate data format for Chart.js
        // Example:
        const durations = rawData.map(pr => pr.followOnCommitCount);
        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: 'PR Durations',
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

export default FollowOnCommits;