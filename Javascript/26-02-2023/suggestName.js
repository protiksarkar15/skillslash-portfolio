var names = "Protik Sarkar";

function suggestUsername(names) {
    return names.split(" ").join("_").toLowerCase();
  /* let username = "";
  nameArr = names.split(" ");
  for (let counter = 0; counter < nameArr.length; counter++) {
    if (counter == nameArr.length-1) {
      username += nameArr[counter].toLowerCase();
      
    } else {
      username += nameArr[counter].toLowerCase() + "_";
      
    }
  }
  console.log(username); */
}

console.log(suggestUsername(names));
