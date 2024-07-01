function dnaStrand(dna) {
    const DNA = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    return dna.split('').map(el => DNA[el]).join('');
}

console.log(dnaStrand("AAAA"))

//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript