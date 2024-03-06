import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { Box } from '@mui/material';

const MetricsCard = ({ title, count, Icon }: { title: string, percentChange: number, count: number, Icon: React.ComponentType<SvgIconProps> }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 5 }}>
            <Icon sx={{ fontSize: 70 }} />
            <Title>{count}</Title>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                {title}
            </Typography>
        </Box>
    )
}

export default MetricsCard;