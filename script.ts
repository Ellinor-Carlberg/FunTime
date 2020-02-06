class Time {
    newDate = new Date()
    hours = this.newDate.getHours()
    minutes = this.newDate.getMinutes()
    morning = true

    getTimeOfDay(): boolean {
        if (this.hours >= 12) {
            this.morning = false
        }
        return this.morning
    }
    getHours(): number {
        if (this.hours >= 12) {
            this.hours = (this.hours - 12)
        }
        else {
            this.hours
        }
        return this.hours
    }
    getMinutes(): number {
        return this.minutes
    }
}

window.addEventListener("load", loadPage)

function loadPage() {
    const rows: number = 11
    const cols: number = 11
    drawTable(rows, cols)
    drawText(cols)
    setInterval(function () {
        drawTable(rows, cols)
    drawText(cols)
    }, 1000);
    
    
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

    let time = new Time()
    const allRows = document.querySelectorAll('tr')

    drawRelevantArray(words, 0, cols, allRows)
    drawTimeText(time, 11, cols, allRows)
    drawTime(time, 5, 7, cols, allRows)
    drawHours(time, 9, cols, allRows)
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

function drawTimeText(time: Time, rowNumber: number, cols: number, allRows: NodeListOf<HTMLTableRowElement>) {
    let timeOfDay: string
    if (time.getTimeOfDay()) {
        timeOfDay = 'AM'
    }
    else {
        timeOfDay = 'PM'
    }
    let eachCell = allRows[rowNumber].childNodes as NodeListOf<HTMLTableDataCellElement>
    placeRandomly(cols, timeOfDay, eachCell)
}

function drawHours(time: Time, rowNumber: number, cols: number, allRows: NodeListOf<HTMLTableRowElement>) {
    const hoursText: string[] = ['twelve','one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven','twelve']
    let minutesNum = time.getMinutes()
    let hours
    if (minutesNum <= 30) {
        hours = hoursText[time.getHours()]
    }
    else {
        hours = hoursText[time.getHours() + 1]
    }

    let eachCell = allRows[rowNumber].childNodes as NodeListOf<HTMLTableDataCellElement>
    placeRandomly(cols, hours, eachCell)
}

function drawTime(time: Time, minutesRow: number, directionRow: number, cols: number, allRows: NodeListOf<HTMLTableRowElement>) {

    let minutesNum = time.getMinutes()
    const minutesText: string[] = ['five', 'ten', 'quarter', 'twenty', 'twenty-five', 'half']

    let eachCell = allRows[minutesRow].childNodes as NodeListOf<HTMLTableDataCellElement>
    let eachCellRow2 = allRows[directionRow].childNodes as NodeListOf<HTMLTableDataCellElement>
    let minutes: string


    if (minutesNum == 0) {
        minutes = ''
        placeRandomly(cols, '', eachCellRow2)
    }
    else if (minutesNum > 0 && minutesNum <= 30) {
        minutes = minutesText[Math.floor(minutesNum / 5) - 1]
        placeRandomly(cols, 'past', eachCellRow2)
    }
    else {
        minutes = minutesText[minutesText.length - Math.floor((minutesNum - 30) / 5) - 1]
        placeRandomly(cols, 'to', eachCellRow2)
    }
    placeRandomly(cols, minutes, eachCell)
}

function placeRandomly(cols, item: string, eachCell) {
    const startNumber = Math.floor(Math.random() * (cols - item.length))
    for (let i = 0; i < item.length; i++) {
        let character = item.charAt(i)
        eachCell[startNumber + i].innerText = character
        eachCell[startNumber + i].classList.add("highlight")
    }
}
