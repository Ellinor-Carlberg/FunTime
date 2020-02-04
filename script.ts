// enum Page {
//     TextClock,
//     RotateClock
// }

window.addEventListener("load", loadPage)
function loadPage() {
    const rows: number = 11
    const cols: number = 11
    let words: string[] = ['the', 'time', 'is']
    let alphabets: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

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
    console.log(table)

    const allRows = document.querySelectorAll('tr')
    const eachCell = allRows[0].childNodes as any
    const wordLength = words[0].length
    console.log(wordLength)

    console.log(eachCell[0])

    const startNumber = Math.floor(Math.random() * (cols - wordLength))

    console.log(words[0])
    for (let i = 0; i < wordLength; i++) {
        let character = words[0].charAt(i)
        console.log(character)
        eachCell[startNumber + i].innerText = character
    }

}

