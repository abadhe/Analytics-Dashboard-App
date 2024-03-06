import * as React from 'react';
import Title from './Title';
import { PieChart } from '@mui/x-charts/PieChart';


export default function Deposits() {
    return (
        <React.Fragment>
            <Title>Average Price</Title>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                        ],
                    },
                ]}
            />
        </React.Fragment>
    );
}