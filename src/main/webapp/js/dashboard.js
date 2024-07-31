// Log the data to the console
console.log("Documents:", documents);
console.log("Shipments:", shipments);
console.log("Locations:", locations);

// iterate through shipment data and find loading , discharge, shipper, carrier, milestone top 5
var topLoadingPorts = {};
var topDischargePorts = {};
var topShippers = {};
var topCarriers = {};
var topMilestones = {};

shipments.forEach(function (shipment) {
  var loadingPort = shipment.loading;
  var dischargePort = shipment.discharge;
  var shipper = shipment.shipper;
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

  if (topShippers[shipper]) {
    topShippers[shipper]++;
  } else {
    topShippers[shipper] = 1;
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
topShippers = sortData(topShippers);
topCarriers = sortData(topCarriers);
topMilestones = sortData(topMilestones);

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
topLoadingPorts = getTopData(topLoadingPorts);
topDischargePorts = getTopData(topDischargePorts);
topShippers = getTopData(topShippers);
topCarriers = getTopData(topCarriers);
topMilestones = getTopData(topMilestones);

console.log("Top Loading Ports:", topLoadingPorts);
console.log("Top Discharge Ports:", topDischargePorts);
console.log("Top Shippers:", topShippers);
console.log("Top Carriers:", topCarriers);
console.log("Top Milestones:", topMilestones);

// create chart data
var topLoadingChartData = {
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
topLoadingPorts.forEach(function (item) {
  topLoadingChartData.labels.push(item[0]);
  topLoadingChartData.datasets[0].data.push(item[1]);
  topLoadingChartData.datasets[0].backgroundColor.push("#b22222");
});

var topDischargeChartData = {
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
topDischargePorts.forEach(function (item) {
  topDischargeChartData.labels.push(item[0]);
  topDischargeChartData.datasets[0].data.push(item[1]);
});

var topShippersChartData = {
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
topShippers.forEach(function (item) {
  topShippersChartData.labels.push(item[0]);
  topShippersChartData.datasets[0].data.push(item[1]);
});

var topCarriersChartData = {
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
topCarriers.forEach(function (item) {
  topCarriersChartData.labels.push(item[0]);
  topCarriersChartData.datasets[0].data.push(item[1]);
});

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

document.addEventListener("DOMContentLoaded", function () {
  //make config accept data
  const config = (data) => ({
    type: "doughnut",
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
      id: "originPortChart",
      legendId: "originPortLegend",
      data: topLoadingChartData,
    },
    {
      id: "destinationPortChart",
      legendId: "destinationPortLegend",
      data: topDischargeChartData,
    },
    {
      id: "carrierChart",
      legendId: "carrierLegend",
      data: topCarriersChartData,
    },
    {
      id: "consigneeChart",
      legendId: "consigneeLegend",
      data: topShippersChartData,
    },
    {
      id: "milestonesChart",
      legendId: "milestonesLegend",
      data: topMilestonesChartData,
    },
  ];

  charts.forEach((chart) => {
    const chartInstance = new Chart(
      document.getElementById(chart.id),
      config(chart.data)
    );
    generateLegend(chart.legendId, chart.data);
  });

  function generateLegend(legendId, data) {
    const legendContainer = document.getElementById(legendId);
    data.labels.forEach((label, index) => {
      const color = data.datasets[0].backgroundColor[index];
      const legendItem = document.createElement("div");
      legendItem.className = "legend-item";
      legendItem.innerHTML = `
                <span class="legend-color" style="background-color: ${color};"></span>
                ${label}
            `;
      legendContainer.appendChild(legendItem);
    });
  }

  document.getElementById("document-list").innerHTML = documents
    .map((document) => {
      const date = new Date(document.created_at).toString().slice(0, 21);
      // console.log(date);
      const dateShow = date.slice(4, 15);
      const time = date.slice(16, 21);
      return `
            <div class="document-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3997/3997593.png"
                  alt="PDF Icon"
                  class="icon"
                />
                <div class="document-info">
                  <p class="document-title">${document.title}</p>
                  <p class="document-desc">${document.description}</p>
                </div>
                <div class="document-date">
                  <p>${dateShow}</p>
                  <p>${time} AM</p>
                </div>
            </div>
        `;
    })
    .join("");
});
