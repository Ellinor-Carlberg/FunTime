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


        // // while ((words.shift()) !== undefined) {
        // if (words.length > 0) {
        //     const word = words.shift()
        //     const offset = Math.floor((1 + cols - words.length))

        //     for (let i = 0; i < word.length; i++) {
        //         if (1 + offset < cols) {
        //             row[i + offset] = word[i]
        //         }
        //     }
        // }
        // // }
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
    const numOfChildDeleted = words[0].length
    console.log(numOfChildDeleted)

    console.log(eachCell[0])
    eachCell[1].innerText = '1'
    eachCell[2].innerText = '5'
    eachCell[3].innerText = '6'
    // eachCell[2]
    // eachCell[3]

}

