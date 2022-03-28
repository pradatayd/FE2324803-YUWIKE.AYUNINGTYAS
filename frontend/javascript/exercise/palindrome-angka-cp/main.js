/**
 * Carilah angka palindrome yang LEBIH BESAR dan TERDEKAT dari angka-angka dibawah ini
 *
 * Misal:
 * - Jika angka pada parameter bernilai 90 maka angka palindrome terdekat adalah 99
 * - Jika angka pada parameter bernilai 102 maka angka palindrome terdekat adalah 111
 */

function angkaPalindrome(num) {
  // TODO: answer here
  for (var i = num; i < 999999999; i++) {
    var str = i.toString();
    var str2 = "";
    for (var j = 0; j < str.length; j++) {
      str2 += str[str.length - 1 - j];
    }
    if (str2 == str) {
      return str2;
    }
  }
}

console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(17)); //22
console.log(angkaPalindrome(175)); //181

module.exports = angkaPalindrome;
