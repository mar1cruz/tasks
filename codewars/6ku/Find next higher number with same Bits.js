function nextHigher(n) {
    const binary = Number(n).toString(2);
    const binaryUnits = binary.split('').filter(el => el === '1').length;
    let findBinaryUnits = 0

    while (binaryUnits === findBinaryUnits) {

        n+=1
    }
}

console.log(nextHigher("129"))

//https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5/train/javascript