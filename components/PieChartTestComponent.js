import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

var bkColor, hbkColor;
export default class PieChartIncomeComponent extends Component {
  state = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  static getDerivedStateFromProps(props, state) {
    var expColor = "#FF6384";
    var IncomeData = props.data.slice(0, 2);
    var Expenses = IncomeData[0] - IncomeData[1];
    IncomeData[1] = Expenses;
    return {
      labels: ["Income", "Expenses"],
      datasets: [
        {
          data: IncomeData,
          backgroundColor: [bkColor, expColor],
          hoverBackgroundColor: [bkColor, expColor],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Pie Chart of Income</h2>
        <Pie data={this.state} />
      </div>
    );
  }
}
