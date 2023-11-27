import { createSlice } from "@reduxjs/toolkit";
import { ChartType } from "chart.js";

interface ReportState {
  chartType: ChartType;
  chartData1: any[];
  chartData2: any[];
}

const initialState: ReportState = {
  chartType: "bar",
  chartData1: [],
  chartData2: [],
};

const reportSlice = createSlice({
  name: "report",
  reducers: {},
  initialState,
});

export default reportSlice.reducer;
