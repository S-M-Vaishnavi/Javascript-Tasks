
var str = "Get the unmatched stability of a government career and make a real difference in your community. As a City employee, you’ll get the chance to make a positive impact on New Yorkers’ lives every day you go to work.";
const output = document.getElementById('output');
const table = document.createElement('table');
table.setAttribute("rules", "all");
table.style.border = '1px solid black';

function mywordoccur(str) {
    let words = str.split(" ");
    let smallestWordsSet = new Set([words[0]]);
    let smallestLength = words[0].length;
    let largestWordsSet = new Set([words[0]]);
    let largestLength = words[0].length;

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < smallestLength) {
            smallestWordsSet = new Set([words[i]]);
            smallestLength = words[i].length;
        } else if (words[i].length === smallestLength) {
            smallestWordsSet.add(words[i]);
        }

        if (words[i].length > largestLength) {
            largestWordsSet = new Set([words[i]]);
            largestLength = words[i].length;
        } else if (words[i].length === largestLength) {
            largestWordsSet.add(words[i]);
        }
    }

    let smallestWords = Array.from(smallestWordsSet);
    let largestWords = Array.from(largestWordsSet);

    let smallestWordCount = {};
    for (let word of smallestWords) {
        smallestWordCount[word] = 0;
    }
    for (let word of words) {
        if (smallestWords.includes(word)) {
            smallestWordCount[word]++;
        }
    }

    let largestWordCount = {};
    for (let word of largestWords) {
        largestWordCount[word] = 0;
    }
    for (let word of words) {
        if (largestWords.includes(word)) {
            largestWordCount[word]++;
        }
    }

    const headerNames = ['Word', 'Length', 'Occurrence'];
    const headerRow = document.createElement('tr');
    headerNames.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    function addRows(words, wordCount) {
        words.forEach(word => {
            const row = document.createElement('tr');

            const wordCell = document.createElement('td');
            wordCell.textContent = word;
            row.appendChild(wordCell);

            const lengthCell = document.createElement('td');
            lengthCell.textContent = word.length;
            row.appendChild(lengthCell);

            const occurrenceCell = document.createElement('td');
            occurrenceCell.textContent = wordCount[word];
            row.appendChild(occurrenceCell);

            table.appendChild(row);
        });
    }

    addRows(smallestWords, smallestWordCount);
    addRows(largestWords, largestWordCount);

    output.appendChild(table);

}

// Test run
mywordoccur(str);
