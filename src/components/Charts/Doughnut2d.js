import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Chart from 'fusioncharts/fusioncharts.charts'
import Theme from 'fusioncharts/themes/fusioncharts.theme.candy'
ReactFC.fcRoot(FusionCharts, Chart, Theme)

const Doughnut2d = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Stars per Language',
        decimals: 0,
        doughnutRadius: '45%',
        showPercentValues: 0,
        theme: 'candy',
      },
      // Chart Data
      data: data,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default Doughnut2d
