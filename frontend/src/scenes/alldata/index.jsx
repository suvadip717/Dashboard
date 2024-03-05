import { useMemo } from 'react';
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { useState, useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';


const AllData = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/data/alldata');
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


  const columns = useMemo(
    () => [
      {
        accessorKey: 'country', //access nested data with dot notation
        header: 'Country',
        size: 150,
      },
      {
        accessorKey: 'pestle', //normal accessorKey
        header: 'Pestle',
        size: 200,
      },
      {
        accessorKey: 'added',
        header: 'Added',
        size: 150,
      },
      {
        accessorKey: 'end_year',
        header: 'End Year',
        size: 150,
      },
      {
        accessorKey: 'impact',
        header: 'Impact',
        size: 150,
      },
      {
        accessorKey: 'intensity',
        header: 'Intensity',
        size: 150,
      },
      {
        accessorKey: 'likelihood',
        header: 'Likelihood',
        size: 150,
      },
      {
        accessorKey: 'published',
        header: 'Published',
        size: 150,
      },
      {
        accessorKey: 'region',
        header: 'Region',
        size: 150,
      },
      {
        accessorKey: 'relevance',
        header: 'Relevance',
        size: 150,
      },
      {
        accessorKey: 'relevance',
        header: 'Relevance',
        size: 150,
      },
      {
        accessorKey: 'sector',
        header: 'Sector',
        size: 150,
      },
      {
        accessorKey: 'source',
        header: 'Source',
        size: 150,
      },
      {
        accessorKey: 'start_year',
        header: 'Start Year',
        size: 150,
      },
      {
        accessorKey: 'title',
        header: 'Title',
        size: 150,
      },
      {
        accessorKey: 'topic',
        header: 'Topic',
        size: 150,
      },
      {
        accessorKey: 'url',
        header: 'Url',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <Box m="20px">
      <Header title="All Data" subtitle="Checking All Data" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <MaterialReactTable table={table} />
      </Box>
    </Box>
  )

};

export default AllData;

