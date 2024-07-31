let chartInstance = {};
function analytics(shipmentsData) {
  shipments = shipmentsData;
  var topLoadingPorts = {};
  var topDischargePorts = {};
  var topDelivery = {};
  var topShippers = {};
  var topConsignees = {};
  var topCarriers = {};

  var topMilestones = {};

  shipments.forEach(function (shipment) {
    var loadingPort = shipment.loading;
    var dischargePort = shipment.discharge;
    var delivery = shipment.delivery;
    var shipper = shipment.shipper;
    var consignee = shipment.consignee;
    var carrier = shipment.carrier;
    var milestone = shipment.milestone;

    if (topLoadingPorts[loadingPort]) {
      topLoadingPorts[loadingPort]++;
    } else {
      topLoadingPorts[loadingPort] = 1;
    }

    if (topDischargePorts[dischargePort]) {
      topDischargePorts[dischargePort]++;
    } else {
      topDischargePorts[dischargePort] = 1;
    }

    if (topDelivery[delivery]) {
      topDelivery[delivery]++;
    } else {
      topDelivery[delivery] = 1;
    }

    if (topShippers[shipper]) {
      topShippers[shipper]++;
    } else {
      topShippers[shipper] = 1;
    }

    if (topConsignees[consignee]) {
      topConsignees[consignee]++;
    } else {
      topConsignees[consignee] = 1;
    }

    if (topCarriers[carrier]) {
      topCarriers[carrier]++;
    } else {
      topCarriers[carrier] = 1;
    }
    if (topMilestones[milestone]) {
      topMilestones[milestone]++;
    } else {
      topMilestones[milestone] = 1;
    }
  });

  // sort the data in descending order
  sortData = function (data) {
    var sortable = [];
    for (var key in data) {
      sortable.push([key, data[key]]);
    }
    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });
    return sortable;
  };

  topLoadingPorts = sortData(topLoadingPorts);
  topDischargePorts = sortData(topDischargePorts);
  topDelivery = sortData(topDelivery);
  topShippers = sortData(topShippers);
  topConsignees = sortData(topConsignees);
  topCarriers = sortData(topCarriers);
  topMilestones = sortData(topMilestones);

  console.log("Top Loading Ports:", topLoadingPorts);
  console.log("Top Discharge Ports:", topDischargePorts);
  console.log("Top Delivery:", topDelivery);
  console.log("Top Shippers:", topShippers);
  console.log("Top Consignees:", topConsignees);
  console.log("Top Carriers:", topCarriers);
  console.log("Top Milestones:", topMilestones);

  document.getElementById("loading-list").innerHTML = topLoadingPorts
    .map((port) => {
      return `<div class="item-line">
                  <div class="document-info">
                    <p>${port[0]}</p>
                  </div>
                  <div class="document-date">
                    <p>${port[1]}</p>
                  </div>
                </div>`;
    })
    .join("");

  document.getElementById("discharge-list").innerHTML = topDischargePorts
    .map((port) => {
      return `<div class="item-line">
                    <div class="document-info">
                        <p>${port[0]}</p>
                    </div>
                    <div class="document-date">
                        <p>${port[1]}</p>
                    </div>
                    </div>`;
    })
    .join("");

  document.getElementById("delivery-list").innerHTML = topDelivery
    .map((port) => {
      return `<div class="item-line">
                    <div class="document-info">
                        <p>${port[0]}</p>
                    </div>
                    <div class="document-date">
                        <p>${port[1]}</p>
                    </div>
                    </div>`;
    })
    .join("");

  document.getElementById("shipper-list").innerHTML = topShippers
    .map((port) => {
      return `<div class="item-line">
                    <div class="document-info">
                        <p>${port[0]}</p>
                    </div>
                    <div class="document-date">
                        <p>${port[1]}</p>
                    </div>
                    </div>`;
    })
    .join("");

  document.getElementById("consignee-list").innerHTML = topConsignees
    .map((port) => {
      return `<div class="item-line">
                    <div class="document-info">
                        <p>${port[0]}</p>
                    </div>
                    <div class="document-date">
                        <p>${port[1]}</p>
                    </div>
                    </div>`;
    })
    .join("");

  document.getElementById("carrier-list").innerHTML = topCarriers
    .map((port) => {
      return `<div class="item-line">
                    <div class="document-info">
                        <p>${port[0]}</p>
                    </div>
                    <div class="document-date">
                        <p>${port[1]}</p>
                    </div>
                    </div>`;
    })
    .join("");

  // get top 5 data and calculate total other data
  getTopData = function (data) {
    var topData = data.slice(0, 5);
    var otherData = data.slice(5);
    var total = 0;
    otherData.forEach(function (item) {
      total += item[1];
    });
    if (total > 0) {
      topData.push(["Other", total]);
    }
    return topData;
  };
  topMilestones = getTopData(topMilestones);
  console.log("Top Milestones:", topMilestones);

  //compare shipments estimated time and arrival time to get the number of late shipments
  var onTime = 0;
  var late = 0;

  shipments.forEach(function (shipment) {
    var estimatedTime = new Date(shipment.estimated_time_of_arrival);
    var arrivalTime = new Date(shipment.actual_time_of_arrival);

    if (arrivalTime <= estimatedTime) {
      onTime++;
    } else {
      late++;
    }
  });

  // create chart data

  var topMilestonesChartData = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#b22222",
          "#8b4513",
          "#ffa07a",
          "#98fb98",
          "#1e90ff",
          "#d3d3d3",
        ],
      },
    ],
  };
  topMilestones.forEach(function (item) {
    topMilestonesChartData.labels.push(item[0]);
    topMilestonesChartData.datasets[0].data.push(item[1]);
  });

  var lateShipmentsChartData = {
    labels: ["ON TIME", "LATE"],
    datasets: [
      {
        data: [onTime, late],
        backgroundColor: ["#7BB896", "#F7A668"],
      },
    ],
  };

  //make config accept data
  const config = (data) => ({
    type: "pie",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  const charts = [
    {
      id: "milestonesChart",
      legendId: "milestonesLegend",
      data: topMilestonesChartData,
    },
    {
      id: "lateShipmentsChart",
      legendId: "lateShipmentsLegend",
      data: lateShipmentsChartData,
    },
  ];

  charts.forEach((chart) => {
    if(chartInstance && chartInstance[chart.id]) {
      chartInstance[chart.id].destroy();
    }
    const newChart = new Chart(
      document.getElementById(chart.id),
      config(chart.data)
    );
    chartInstance[chart.id] = newChart;
    generateLegend(chart.legendId, chart.data);
  });

  function generateLegend(legendId, data) {
    const legendContainer = document.getElementById(legendId);
    legendContainer.innerHTML = "";
    data.labels.forEach((label, index) => {
      const color = data.datasets[0].backgroundColor[index];
      const legendItem = document.createElement("div");
      legendItem.className = "legend-item";
      legendItem.innerHTML = `
                <span class="legend-color" style="background-color: ${color};"></span>
                ${label} (${data.datasets[0].data[index]})
            `;
      legendContainer.appendChild(legendItem);
    });
  }
}
