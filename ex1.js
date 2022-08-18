let words = Array('rudy', 'dandelion', 'cat');
function vowels(words) {
    var vowelsCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of words) {
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount;
}
function consonants(words) {
    var countConsonants = 0;
    for (var i = 0; i < words.length; i++) {
      if (words[i] !== "a" && words[i] !== "e" && words[i] !== "i" &&
        words[i] !== "o" && words[i] !== "u" && words[i] !== " ") {
        countConsonants += 1;
      }
      console.log(`Cuvantul ${words[i]} are ${words[i].length} litere.`);
    }
    return countConsonants;
  }
console.log(words, words.length);
console.log(`Array-ul are${words.length} cuvinte.`);
console.log(`Cuvantul "rudy" are ${words[0].length} litere.`);
console.log(`Cuvantul "dandelion" are ${words[1].length} litere.`);
console.log(`Cuvantul "cat" are ${words[2].length} litere.`);

vowels('rudy');
console.log('Cuvantul "rudy" are ' + vowels('rudy') + ' vocale.');
consonants('rudy');
console.log('Cuvantul "rudy" are ' + consonants('rudy') + ' consoane.');

vowels('dandelion');
console.log('Cuvantul "dandelion" are ' + vowels('dandelion') + ' vocale.');
consonants('dandelion');
console.log('Cuvantul "dandelion" are ' + consonants('dandelion') + ' consoane.');

vowels('cat');
console.log('Cuvantul "cat" are ' + vowels('cat') + ' vocale.');
consonants('cat');
console.log('Cuvantul "cat" are ' + consonants('cat') + ' consoane.');
