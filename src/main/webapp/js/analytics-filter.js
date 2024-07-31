// console.log("shipmets at filter", shipments);
// const shipmentsData = shipments;
// let allShipments = [...shipments];
// // console.log("shipmentsData", shipmentsData);
// var types = {};

// shipments.forEach(function (shipment) {
//   var type = shipment.size_type;
//   if (types[type]) {
//     types[type]++;
//   } else {
//     types[type] = 1;
//   }
// });

// var type = Object.keys(types);
// //add to inner html
// const typeSelect = document.getElementById("type-select");
// typeSelect.innerHTML = "";

// const defaultOption = document.createElement("option");
// defaultOption.textContent = "Select";
// defaultOption.value = "";
// typeSelect.appendChild(defaultOption);

// type.forEach((port, index) => {
//   const option = document.createElement("option");
//   option.value = port;
//   option.textContent = port;
//   typeSelect.appendChild(option);
// });

// document.getElementById("goButton").addEventListener("click", function () {
//   if (document.getElementById("type-select").value === "") {
//     shipments = shipmentsData;
//   } else {
//     shipments = shipmentsData.filter(function (shipment) {
//       return (
//         shipmentsData.size_type === document.getElementById("type-select").value
//       );
//     });
//     console.log("shipments after filter", shipments);
//   }
// });
let allShipments = [...shipments];
var types = {};

shipments.forEach(function (shipment) {
  var type = shipment.size_type;
  if (types[type]) {
    types[type]++;
  } else {
    types[type] = 1;
  }
});

var type = Object.keys(types);
const typeSelect = document.getElementById("type-select");
typeSelect.innerHTML = "";
console.log("Type", type);

const defaultOption = document.createElement("option");
defaultOption.textContent = "Select";
defaultOption.value = "";
typeSelect.appendChild(defaultOption);

type.forEach((port, index) => {
  const option = document.createElement("option");
  option.value = port;
  option.textContent = port;
  typeSelect.appendChild(option);
});

function resetAndFilterData() {
  shipments = [...allShipments];
  populateAndFilter();
  analytics(shipments);
  analyticsTable(shipments);
}

function populateAndFilter() {
  if (typeSelect.value !== "") {
    console.log("Filtering by type", typeSelect.value, shipments, allShipments);
    shipments = allShipments.filter(function (shipment) {
      return shipment.size_type === typeSelect.value;
    });
    console.log("Filtered shipments", shipments);
  }

  console.log("Filtered shipments", shipments);
}

// Event listener for the button
document.getElementById("goButton").addEventListener("click", function () {
  resetAndFilterData();
});

resetAndFilterData();
