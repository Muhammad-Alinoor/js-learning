const str = 'The quick brown fox\n jumps over a lazy dog';
const strCopy = str.split();
console.log(strCopy);
const wordCopy = str.split(' ');
console.log(wordCopy)
const charCopy = str.split('');
console.log(charCopy);
const newString = 'left and left and theft and kept';
const multiSplit = newString.split('e', 5);
console.log(multiSplit);
const another = str.split('\n');
console.log(another)
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';
const arrayOfNames = names.split(/ \s*(?:;|$)\s*/ );
console.log(arrayOfNames)