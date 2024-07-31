function analyticsTable(shipments) {
  const data = shipments;

  // Pagination variables
  let currentPage = 1;
  let rowsPerPage = 10;

  // DOM elements
  const tableBody = document.getElementById("table-body");
  const paginationSummary = document.getElementById("pagination-summary");
  const paginationControls = document.getElementById("pagination-controls");
  const rowsPerPageSelect = document.getElementById("rowsPerPage");

  rowsPerPageSelect.addEventListener("change", function () {
    rowsPerPage = parseInt(this.value, 10);
    currentPage = 1;
    updateTable();
  });

  function updateTable() {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    tableBody.innerHTML = "";

    const pageData = data.slice(startIndex, endIndex);
    pageData.forEach((shipment) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
            <td>${shipment.hbl_no}</td>
            <td>${shipment.mbl_no}</td>
            <td>${shipment.po_ref_no}</td>
            <td>${shipment.recipt}</td>
            <td>${shipment.loading}</td>
            <td>${shipment.discharge}</td>
            <td>${shipment.delivery}</td>
            <td>${shipment.booking_no}</td>
            <td>${shipment.size_type}</td>
            <td>${shipment.carrier}</td>
            <td>${shipment.commodity}</td>
            <td>${shipment.milestone}</td>
            <td>${shipment.milestone_group}</td>
            `;
      tableBody.appendChild(tr);
    });

    paginationSummary.textContent = `${startIndex + 1}-${Math.min(
      endIndex,
      data.length
    )} of ${data.length}`;

    updatePaginationControls();
  }

  function updatePaginationControls() {
    paginationControls.innerHTML = "";

    const totalPages = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.classList.add("page-number");
      if (i === currentPage) {
        button.classList.add("page-number-active");
      }
      button.addEventListener("click", () => {
        currentPage = i;
        updateTable();
      });
      paginationControls.appendChild(button);
    }
  }

  updateTable();
}
