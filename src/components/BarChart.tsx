// components/BarChart.js
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';

const BarChart = ({ data }) => {
  return (
    <VictoryChart
      domainPadding={{ x: 20 }}
      height={300} // Adjust height based on design
      padding={{ top: 20, bottom: 40, left: 40, right: 20 }}
      style={{
        parent: { borderRadius: 16, backgroundColor: '#f9f9f9' },
      }}
    >
      {/* Bar chart data */}
      <VictoryBar
        data={data}
        // x="month" // eto pag gusto natin by months name ang x-axis
        x="id" // Use the numeric month representation (based sa figma design)
        y="kWh"
        style={{
          data: {
            fill: '#4050E7',
            width: 12,
          },
        }}
        cornerRadius={{ top: 4 }}
      />

      {/* X Axis (months) with explicit tick values */}
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} // kapag wala to, it will only show tick values based on the space
        // tickFormat={(t) => `${t}`} // Convert numeric month to string para sa label 
        style={{
          axis: { stroke: 'transparent' }, // Remove axis line or set to 'transparent' (based sa figma)
          tickLabels: {
            fontSize: 12,
            fill: '#28282C', // color ng text sa x-axis
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
            fill: '#828284', // color ng text sa y-axis
            padding: 5,
          },
        }}
      />
    </VictoryChart>
  );
};

export default BarChart;
