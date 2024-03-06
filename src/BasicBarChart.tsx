import { BarChart } from '@mui/x-charts/BarChart';
import Title from './Title';
import * as React from 'react';

export default function BasicBarChart() {

    return (
        <React.Fragment>
            <Title>Product Category vs Product Sales</Title>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['electronics', 'jewelery', 'clothing'] }]}
                series={[{ data: [4, 3, 5] }, { data: [2, 5, 6] } , { data: [2, 3, 4] },]}
                yAxis={[
                    {
                        label: 'Products Sales in 10k',
                    },
                ]}
            />
        </React.Fragment>
    );
}