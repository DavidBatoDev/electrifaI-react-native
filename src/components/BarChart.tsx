import React from 'react';
import { Dimensions } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';

const BarChart = ({ data }) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <VictoryChart
      domainPadding={{ x: 10 }}
      width={windowWidth-20} // Adjust width based on design
      style={{
        // parent: { borderRadius: 16, backgroundColor: 'white' }, // Add border radius and background color (based sa figma)
      }}
    >
      {/* Bar chart data */}
      <VictoryBar
        data={data}
        x="month" // eto pag gusto natin by months name ang x-axis
        // x="id" // Use the numeric month representation (based sa figma design)
        y="kWh"
        style={{
          data: {
            fill: '#008FE0',
            width: 10,
          },
        }}
        cornerRadius={{ top: 0 }}
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
            padding: 10,
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
            padding: 20,
          },
        }}
      />
    </VictoryChart>
  );
};

export default BarChart;
