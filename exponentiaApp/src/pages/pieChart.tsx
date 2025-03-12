import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const data = [
  { value: 1, label: 'Stocks' },
  { value: 1, label: 'Bonds' },
  { value: 1, label: 'Reacl EState' },
];

const size = {
  width: 300,
  height: 120, // Set height to 150
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 16,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <Box>
    <PieChart series={[{ data, innerRadius: 45 }]} {...size}>
    <PieCenterLabel>3</PieCenterLabel>
      <PieCenterLabel>Assets</PieCenterLabel>
    </PieChart>
    </Box>
  );
}
