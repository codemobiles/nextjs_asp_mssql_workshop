import { getRandomInt } from "@/utils/commonUtil";
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
  reducers: {
    refresh: (state) => {
      state.chartData1 = getRandomInt();
      state.chartData2 = getRandomInt();
    },
  },
  initialState,
});

export default reportSlice.reducer;
export const { refresh } = reportSlice.actions;
