import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { tokens } from "../theme";
import { useState, useEffect } from "react";
import { URI } from "../constant";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${URI}/country`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData.data);
      // console.log(jsonData)
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
    }
  };


  return (
    <ResponsiveChoropleth
      data={data}
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
              strokeWidth: 5,
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
      }}
      defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'dotG',
            type: 'patternDots',
            background: 'inherit',
            color: '#158528',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'dotsR',
            type: 'patternDots',
            background: 'inherit',
            color: '#d86d38',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        },
        {
            id: 'lineI',
            type: 'patternLines',
            background: 'inherit',
            color: '#10d40d',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        },
        {
            id: 'lineC',
            type: 'patternLines',
            background: 'inherit',
            color: '#068c81',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        },
        {
            id: 'gradient',
            type: 'linearGradient',
            colors: [
                {
                    offset: 0,
                    color: '#e3123c'
                },
                {
                    offset: 100,
                    color: 'inherit'
                }
            ]
        },
        {
            id: 'gradiU',
            type: 'linearGradient',
            colors: [
                {
                    offset: 0,
                    color: '#1f33cf'
                },
                {
                    offset: 100,
                    color: 'inherit'
                }
            ]
        },
        {
            id: 'gradiIn',
            type: 'linearGradient',
            colors: [
                {
                    offset: 0,
                    color: '#e307c6'
                },
                {
                    offset: 100,
                    color: 'inherit'
                }
            ]
        },
        {
            id: 'colorB',
            type: 'linearGradient',
            colors: [
              {
                  offset: 0,
                  color: '#350982'
              },
              {
                  offset: 100,
                  color: 'inherit'
              }
          ]
        },
    ]}
    fill={[
        {
            match: {
              value: 224
            },
            id: 'dots'
        },
        {
            match: {
              value: 38
            },
            id: 'lines'
        },
        {
            match: {
              value: 2
            },
            id: 'gradient'
        },
        {
            match: {
              value: 4
            },
            id: 'dotsR'
        },
        {
            match: {
              value: 50
            },
            id: 'lineI'
        },
        {
            match: {
              value: 48
            },
            id: 'gradiU'
        },
        {
            match: {
              value: 12
            },
            id: 'gradiIn'
        },
        {
            match: {
              value: 8
            },
            id: 'dotG'
        },
        {
            match: {
              value: 20
            },
            id: 'colorB'
        },
        {
            match: {
              value: 10
            },
            id: 'lineC'
        },
    ]}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 55 : 150}
      projectionTranslation={isDashboard ? [0.5, 0.5] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      // legends={
      //   isDashboard
      //     ? [
      //         {
      //           anchor: "bottom-left",
      //           direction: "column",
      //           justify: true,
      //           translateX: 20,
      //           translateY: -127,
      //           itemsSpacing: 7,
      //           itemWidth: 95,
      //           itemHeight: 18,
      //           itemDirection: "left-to-right",
      //           itemTextColor: "#444444",
      //           itemOpacity: 0.85,
      //           symbolSize: 18,
      //           effects: [
      //             {
      //               on: "hover",
      //               style: {
      //                 itemTextColor: "#ffffff",
      //                 itemOpacity: 1,
      //               },
      //             },
      //           ],
      //         },
      //       ]
      //     : undefined
      // }
    />


  );
};

export default GeographyChart;
