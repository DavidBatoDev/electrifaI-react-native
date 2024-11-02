// components/BarChart.tsx
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';

interface BarChartProps {
  data: {
    month: string | number;
    kWh: number;
  }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <VictoryChart
      domainPadding={{ x: 20 }}
      height={300} 
      padding={{ top: 20, bottom: 40, left: 40, right: 20 }}
      style={{
        parent: { borderRadius: 16, backgroundColor: '#f9f9f9' },
      }}
    >
      {/* Bar chart data */}
      <VictoryBar
        data={data}
        x="month" 
        // x="id" 
        y="kWh"
        style={{
          data: {
            fill: '#4050E7',
            width: 8,
          },
        }}
        cornerRadius={{ top: 0 }}
      />

      {/* X Axis (months) with explicit tick values */}
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} // Explicit tick values for months
        // tickFormat={(t) => `${t}`} // Convert numeric month to string para for the label 
        style={{
          axis: { stroke: 'transparent' }, // Remove axis line or set to 'transparent'
          tickLabels: {
            fontSize: 12,
            fill: '#28282C', 
            padding: 5,
          },
        }}
      />

      {/* Y Axis (kWh) */}
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => `${x}`}
        style={{
          axis: { stroke: 'transparent' }, // No visible axis line
          tickLabels: {
            fontSize: 12,
            fill: '#828284', 
            padding: 5,
          },
        }}
      />
    </VictoryChart>
  );
};

export default BarChart;