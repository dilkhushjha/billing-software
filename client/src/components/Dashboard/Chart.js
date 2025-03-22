import React from "react";
import ReactApexChart from "react-apexcharts";

function Chart({ paymentHistory }) {
  console.log(paymentHistory, "On chart file")

  let paymentDates = []
  for (let i = 0; i < paymentHistory.length; i++) {
    const newDate = new Date(paymentHistory[i].datePaid);
    let localDate = newDate.toLocaleDateString();
    paymentDates = [...paymentDates, localDate]
  }

  console.log(paymentDates)


  let paymentReceived = []
  for (let i = 0; i < paymentHistory.length; i++) {
    paymentReceived = [...paymentReceived, paymentHistory[i].amountPaid]
  }

  console.log(paymentReceived)



  const series = [

    {
      name: "Payment Recieved",
      data: paymentReceived,
    },

  ];

  console.log(series)
  const options = {
    chart: {
      zoom: { enabled: false },
      toolbar: { show: true },
    },
    dataLabels: {
      enabled: true,
    },

    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: paymentDates,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
        width: '90%',
        margin: '10px auto',
        padding: '10px'
      }}
    >
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="scatter"
        height={300}

      />
    </div>
  );
}

export default Chart