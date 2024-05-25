const output = document.getElementById('output');
const table = document.createElement('table');
table.setAttribute("rules","all");
table.style.border = '1px solid black';

var str = "Get the unmatched stability of a government career and make a real difference in your community. As a City employee, you’ll get the chance to make a positive impact on New Yorkers’ lives every day you go to work.";

function mywordsort(str){
    const words = str.split(" ");
    const wordsInTable = words.map((word,index)=>({
        word:word,
        position:index+1,
        length:word.length
    }));
    wordsInTable.sort((a,b)=>a.length-b.length);

    const headerNames = ['Word','Position','Length'];
    const headerRow = document.createElement('tr');
    headerNames.forEach(headerText=>{
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    wordsInTable.forEach(({word,position,length}) => {
        const row = document.createElement('tr');

        const wordCell = document.createElement('td');
        wordCell.textContent = word;
        row.appendChild(wordCell);

        const positionCell = document.createElement('td');
        positionCell.textContent = position;
        row.appendChild(positionCell);

        const lengthCell = document.createElement('td');
        lengthCell.textContent = length;
        row.appendChild(lengthCell);

        table.appendChild(row);
    });
    output.appendChild(table);
}
mywordsort(str);




