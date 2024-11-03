import React from 'react';
import { Dimensions } from 'react-native';
import { VictoryPie } from 'victory-native';


const PieChart = ({ data }) => {

  const windowWidth = Dimensions.get('window').width;

  return (
    <VictoryPie
    innerRadius={80} // radius of the inner circle (the hole)
    padAngle={5} // gap between each section of the outer circle
    colorScale={["#00A4FF", "#0D82C4", "#0C6CA2", "#0A517A"]} 
    width = {windowWidth-60}
    data={data}
    categories={{
        x: [
        "Appliances",
        "Lighting",
        "Air Conditioning",
        "Water Pump",
        ],
    }}
    />
  );
};

export default PieChart;