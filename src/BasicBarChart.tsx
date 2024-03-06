import { BarChart } from '@mui/x-charts/BarChart';
import Title from './Title';
import * as React from 'react';

export default function BasicBarChart() {
    return (
        <React.Fragment>
            <Title>Products Count</Title>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 1, 2] }]}
            />
        </React.Fragment>
    );
}