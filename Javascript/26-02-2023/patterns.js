for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 5 - i; j > 0; j--) {
    str += "*";
  }
  console.log(str);
}

console.log("----------------------------------");

for (let i = 0; i < 5; i++) {
  let str = "";
  let space = "";
  for (let j = 0; j < 5 - i; j++) {
    space += " ";
  }
  for (let j = 0; j < i + 1; j++) {
    str += "*";
  }
  console.log(space + str);
}

console.log("----------------------------------");

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= 5; j++) {
        if(j<= 5-i) {
            str += " ";
        } else {
            str += "*";
        }
    }
    console.log(str);
  }