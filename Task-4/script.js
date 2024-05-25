let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');
let d4 = document.getElementById('d4');
let submitBtn = document.getElementById("submitBtn");

function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); 
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function dateDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round((date2 - date1) / oneDay);
    return diffDays;
}

submitBtn.addEventListener("click", function() {
    let dates = [];
    let d1Value = d1.value;
    let d2Value = d2.value;
    let d3Value = d3.value;
    let d4Value = d4.value;

    let date1 = new Date(d1Value);
    let date2 = new Date(d2Value);
    let date3 = new Date(d3Value);
    let date4 = new Date(d4Value);

    dates.push(date1, date2, date3, date4);

    const sortedDates = [...dates].sort((a, b) => a - b);

    let table = document.createElement('table');
    table.setAttribute("rules", "all");
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";

    const headerNames = ['Given Date','Sorted Date','Difference'];
    const headerRow = document.createElement('tr');
    headerNames.forEach(headerText=>{
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    for (let i = 0; i < dates.length; i++) {
        let row = table.insertRow();

        let givenDateCell = row.insertCell(0);
        givenDateCell.innerText = formatDate(dates[i]);
        givenDateCell.style.border = "1px solid black";
        givenDateCell.style.padding = "8px";

        let sortedDateCell = row.insertCell(1);
        sortedDateCell.innerText = formatDate(sortedDates[i]);
        sortedDateCell.style.border = "1px solid black";
        sortedDateCell.style.padding = "8px";

        let diffCell = row.insertCell(2);
        diffCell.style.border = "1px solid black";
        diffCell.style.padding = "8px";
        if (i > 0) {
            let diffDays = dateDifference(sortedDates[i - 1], sortedDates[i]);
            diffCell.innerText = `${diffDays} days `;
        } else {
            diffCell.innerText = " ";
        }
    }
    let outputDiv = document.getElementById('output');
    outputDiv.appendChild(table);
});
