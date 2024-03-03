// print all table between Starting S to Ending E
const printTableBTRange = (s,e) =>{
    for (let i = s; i <= e; i++) {
        for (let j = 1; j < 11; j++) {
            console.log(`${i} * ${j} = ${i*j}`)
        }
    }
}

printTableBTRange(2,5);