const palindrom= (n) => {
  let nOriginal = n;
  let nInvers = "";
  while(n != 0) {
          nInvers = nInvers + (n % 10);
          n = (n - (n % 10)) / 10;
  }
  console.log(nOriginal);
  console.log(nInvers);
  if(nOriginal == nInvers) {
          console.log("This number is a palindrome");
  } else {
          console.log("NOT a palindrome");
  }
  }
  palindrom(121);

  let j = [];
for(i = 0; i < 10000; i++) {
    if(palindrom(i) === true) {
        j.push(i);
    }
}
for(let i = 0; i < j.length; i++){
    console.log(j[i]);
};
