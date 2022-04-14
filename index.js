let angka = 21;
let result = angka;
let hasil = '';
let reverse = '';

for (let i = 0; i < 1; i++) {
  let j = false;
  while (j === false) {
    result++;
    let numString = result.toString(); //10
    for (let k = numString.length - 1; k >= 0; k--) {
      reverse += numString[k];
    }
    if (reverse === numString) {
      hasil = reverse;
      j = true;
    }
    reverse = '';
  }
}
console.log(hasil);
