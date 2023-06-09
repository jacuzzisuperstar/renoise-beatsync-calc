
function calculate() {
  const maxTime = document.getElementById("maxTime").value
  const totalBeats = document.getElementById("totalBeats").value
  const positions = document.getElementById("cursorPositions").value
  const calculated = [];
  positions.split("\n").forEach((position, index) => {
    const value = convertValue(position, maxTime, totalBeats);
    calculated.push(value);
  })
  //
  document.getElementById("answer-raw").innerText = calculated.join("\n");
  document.getElementById("answer-rounded").innerText = calculated.map(value => Math.round(value).toString(10)).join("\n");
}

const convertValue = function(cursorPosition, maxTime, totalBeats) {
  const pos = convert(toArrayOfNumbers(cursorPosition))
  // const max = convert(additionOnArray(toArrayOfNumbers(maxTime),0,-1))
  const max = convert(toArrayOfNumbers(maxTime))
  return totalBeats - ((pos/max) * totalBeats)
}

const convert = function(arr) {
  return (arr[0]-1) + (arr[1] / 4) + (arr[2]/255/4)
}

const additionOnArray = function(arr,pos,increment) {
  if (pos < arr.length) {
    arr[pos] += increment
  }
  return arr
}

const toArrayOfNumbers = function(incoming) {
  const arr = (incoming.split(".")).map(entry => parseInt(entry))
  return arr.concat(Array(3-arr.length).fill(0))
}

const pad_array = function(arr,len,fill) {
  return arr.concat(Array(len).fill(fill)).slice(0,len);
}
