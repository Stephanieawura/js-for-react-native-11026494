// Task One
function processArray(numbers){
    return numbers.map(
      num => {
        if (num % 2 === 0) {
          return num*num;
        } else {
          return num*3;
        }
      }
    );
  }
  const numbers1 = [1,2,3,4,5,6];
  const processedArray = processArray(numbers1);
  console.log(processedArray);
  
  
  // Task Two
  function formatArrayStrings(strings, numbers){
  if(strings.length !== numbers.length){
    throw new Error("The number of strings and numbers must be equal. ");
  }
  for (let i=0; i < strings.length; i++){
    const string = strings[i];
    const number = numbers[i];
    if (number % 2 === 0){
      strings[i] = string.toUpperCase();
    }
  else {
    strings[i] = string.toLowerCase();
  }
  
  }
  
  return strings;
  
  }
  const strings = ["Welcome", "and", "thanks for joining us"];
  const numbers = [1,2,3];
  const formattedArrayStrings = formatArrayStrings(strings, numbers);
  console.log(formattedArrayStrings);
