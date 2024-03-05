import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import React, { useEffect, useState } from 'react';
import { URI } from '../constant';

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [topicAdd, setTopicAdd] = useState([])

  useEffect(() => {
    fetch(`${URI}/topic`)
      .then(res => res.json())
      .then((data) => {
        setTopicAdd(data.data)
        // console.log(data.data)
      })
  }, [])

  const formattedData = [{
    id: 'count',
    data: topicAdd.map(item => ({
      x: item.topic,
      y: item.count,
    })),
  }];

  return (
    <ResponsiveLine
      data={formattedData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { scheme: "category10" } : { scheme: "dark2" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }} 
      yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: d => d, 
        tickRotation: -45, 
      }}
      axisLeft={{
        legend: 'Count', 
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      enablePoints={true} 
      enableGridX={false} 
      enableGridY={true} 
      lineWidth={3} 
      pointSize={10} 
      pointColor={{ theme: 'background' }} 
      pointBorderWidth={2} 
      pointBorderColor={{ from: 'serieColor' }} 
      pointLabel="y" 
      pointLabelYOffset={-12} 
      useMesh={true} 
    />
  );
};

export default LineChart;
