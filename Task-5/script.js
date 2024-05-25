let numberTextBox = document.getElementById("numberTextBox");
let normalTextBox = document.getElementById("normalTextBox");
let error = document.getElementById("error");
let submitBtn = document.getElementById("submitBtn");
let tbl1 = document.getElementById("tbl1");
let tbl2 = document.getElementById("tbl2");

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let num = numberTextBox.value;

    if (num < 1 || num > 500) {
        error.innerHTML = "Enter number in between 1 to 500";
        error.style.color = "red";
        return;
    } else {
        error.innerHTML = "";
    }

    if (num % 2 === 0) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.textContent = normalTextBox.value;
        row.appendChild(cell);
        tbl1.appendChild(row);
    } else {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.textContent = normalTextBox.value;
        row.appendChild(cell);
        tbl2.appendChild(row);
    }
});
