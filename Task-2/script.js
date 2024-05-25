let str1 = "Get the unmatched stability of a government career and make a real difference in your community. As a City employee, you'll get the chance to make a positive impact on New Yorkers' lives every day you go to work."; 

let output = document.getElementById("output");
const table = document.createElement('table');
table.setAttribute("rules", "all");
table.style.border = '1px solid black';

function mywordsplit(str) { 
    const headerNames = ['Word', 'Split Word'];
    const headerRow = document.createElement('tr');
    headerNames.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    const words = str.split(" "); 
    for (let word of words) { 
        let splitWord; 
        if ([3, 4].includes(word.length)) { 
            splitWord = word.slice(0, 2) + "-" + word.slice(2); 
        } else if ([5, 6].includes(word.length)) { 
            splitWord = word.slice(0, 3) + "-" + word.slice(3); 
        } else if (word.length > 1) { 
            splitWord = word.slice(0, Math.floor(word.length / 2)) + "-" + word.slice(Math.floor(word.length / 2)); 
        } else { 
            splitWord = word;
        }

        const row = document.createElement('tr');
        const wordCell = document.createElement('td');
        wordCell.textContent = word;
        row.appendChild(wordCell);

        const splitWordCell = document.createElement('td');
        splitWordCell.textContent = splitWord;
        row.appendChild(splitWordCell);

        table.appendChild(row);
    }

    output.appendChild(table);
} 
   
mywordsplit(str1);
