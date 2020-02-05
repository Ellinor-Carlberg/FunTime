// enum Page {
//     TextClock,
//     RotateClock
// }

class Time {
    newDate = new Date()
    hours = this.newDate.getHours()
    minutes = this.newDate.getMinutes()
    morning = true

    getTimeOfDay() {
        if (this.hours > 12) {
            this.morning = false
        }
        return this.morning
    }
    getHours() {
        if (this.hours > 12 && this.minutes > 30) {
            this.hours = (this.hours - 12)
        }
        else {
            this.hours
        }
        return this.hours
    }
    getMinutes() {
        console.log(this.minutes)
        return this.minutes
    }

}

window.addEventListener("load", loadPage)

function loadPage() {
    const rows: number = 11
    const cols: number = 11
    drawTable(rows, cols)
    drawText(cols)
}

function drawTable(rows: number, cols: number) {
    const alphabets: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const data = []

    for (let i = 0; i <= rows; i++) {
        const row = []
        for (let j = 0; j <= cols; j++) {
            const lettersIndex = Math.floor(Math.random() * alphabets.length)
            const letter = alphabets[lettersIndex]
            row.push(letter)
        }
        data.push(row)
    }

    const table = document.querySelector('.text') as HTMLTableElement
    table.innerHTML = ''
    data.forEach((rowData, i) => {
        const row = table.insertRow(i)
        rowData.forEach((cellData, j) => {
            const cell = row.insertCell(j)
            cell.innerText = cellData
        })
    })
}

function drawText(cols: number) {
    const words: string[] = ['the', 'time', 'is']
    // const minutesText: string[] = ['five', 'ten','quarter', 'twenty', 'twenty-five','half']
    // const minutesTo: string[] = [ 'past', 'to']
    let time = new Time()
    const allRows = document.querySelectorAll('tr')

    drawRelevantArray(words, 0, cols, allRows)
    drawTimeText(11, cols, allRows)
    drawHours(time, 5, cols, allRows)
    drawMinutes(time,8,cols,allRows)
    convertNumberToName(time.getMinutes())
    //drawMinutesText(minutesText, 4, cols, allRows)
    // drawRelevantArray(words, 0, cols)
    // drawRelevantArray(words, 0, cols)
}

function drawRelevantArray(array: string[], rowNumber: number, cols: number, allRows: NodeListOf<HTMLTableRowElement>) {
    for (const item of array) {
        const startNumber = Math.floor(Math.random() * (cols - item.length))
        let eachCell = allRows[rowNumber].childNodes as NodeListOf<HTMLTableDataCellElement>
        for (let i = 0; i < item.length; i++) {
            let character = array[rowNumber].charAt(i)
            eachCell[startNumber + i].innerText = character
            eachCell[startNumber + i].classList.add("highlight")
        }
        rowNumber++
    }
}

function drawTimeText(rowNumber, cols: number, allRows: NodeListOf<HTMLTableRowElement>) {
    let time = new Time()
    let timeOfDay
    if (time.getTimeOfDay()) {
        timeOfDay = 'AM'
    }
    else {
        timeOfDay = 'PM'
    }
    let eachCell = allRows[rowNumber].childNodes as NodeListOf<HTMLTableDataCellElement>
    placeRandomly(cols, timeOfDay, eachCell)
}

function drawHours(time, rowNumber, cols: number, allRows: NodeListOf<HTMLTableRowElement>) {
    let hours = convertNumberToName(time.getHours())
    let eachCell = allRows[rowNumber].childNodes as NodeListOf<HTMLTableDataCellElement>
    placeRandomly(cols, hours, eachCell)
}
function drawMinutes(time, rowNumber, cols: number, allRows: NodeListOf<HTMLTableRowElement>) {
    let minutes = convertNumberToName(time.getMinutes())
    let eachCell = allRows[rowNumber].childNodes as NodeListOf<HTMLTableDataCellElement>
    placeRandomly(cols, minutes, eachCell)
}

function convertNumberToName(num) {
    const lowNames = ["zero", "one", "two", "three",
        "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen"]
    const tensNames = ["twenty", "thirty", "forty", "fifty"]
    let tens, ones, result
    if (num < lowNames.length) {
        result = lowNames[num]
    } else {
        tens = Math.floor(num / 10)
        ones = num % 10
        if (tens <= 9) {
            result = tensNames[tens - 2]
            if (ones > 0) {
                result += "-" + lowNames[ones]
            }
        } else {
            result = "infinite"
        }
    }
    console.log(result)
    return result
}


function placeRandomly(cols, item, eachCell) {
    const startNumber = Math.floor(Math.random() * (cols - item.length))
    for (let i = 0; i < item.length; i++) {
        let character = item.charAt(i)
        eachCell[startNumber + i].innerText = character
        eachCell[startNumber + i].classList.add("highlight")
    }
}
