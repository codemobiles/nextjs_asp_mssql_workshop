"use client";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button, ButtonGroup, IconButton, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { ChartType } from "chart.js/auto";
import { labels, getRandomInt } from "@/utils/commonUtil";
import { useSelector } from "react-redux";
import { refresh, setChartType } from "@/store/slices/reportSlice";
import { RootState, useAppDispatch } from "@/store/store";

const chartOption: any = {
  plugins: {
    tooltip: {
      callbacks: {
        title: function () {
          return "CodeMobiles";
        },
      },
    },
    legend: { display: true },
    title: {
      display: true,
      text: "CodeMobiles ChartJS",
      position: "top",
    },
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
        callback: function (value: any, index: any, values: any) {
          return "฿" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
      },
    },
  },
};

const ReportForm = () => {
  const reportReducer = useSelector((state: RootState) => state.reportReducer);
  const dispatch = useAppDispatch();

  // throw Error();

  const data: any = {
    labels: labels,
    datasets: [
      {
        label: "Revenue 2022",
        fill: true,
        lineTension: 0.4, // line curve
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 10, // circle
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: reportReducer.chartData1,
      },
      {
        label: "Revenue 2023",
        fill: false,
        lineTension: 0.1, // line curve
        borderWidth: 0.5, // line thiness
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(220,220,220,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 10, // circle
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(220,220,220,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: reportReducer.chartData2,
      },
    ],
  };

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Paper sx={{ padding: 4 }} elevation={7}>
      <Typography variant="h1">Sale Chart</Typography>
      <ButtonGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <Button
          variant={
            reportReducer.chartType === "line" ? "contained" : "outlined"
          }
          onClick={() => dispatch(setChartType("line"))}
        >
          Line
        </Button>
        <Button
          variant={reportReducer.chartType === "bar" ? "contained" : "outlined"}
          onClick={() => dispatch(setChartType("bar"))}
        >
          Bar
        </Button>
        <Button
          variant={reportReducer.chartType === "pie" ? "contained" : "outlined"}
          onClick={() => dispatch(setChartType("pie"))}
        >
          Pie
        </Button>
      </ButtonGroup>
      <IconButton
        aria-label="refresh"
        onClick={() => {
          dispatch(refresh());
        }}
      >
        <RefreshIcon />
      </IconButton>
      <Box sx={{ height: 500 }}>
        {
          <Chart
            type={reportReducer.chartType}
            data={data}
            width="100%"
            options={chartOption}
          />
        }
      </Box>
    </Paper>
  );
};

export default ReportForm;
