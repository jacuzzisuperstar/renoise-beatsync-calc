
function calculate() {
  const cursor = document.getElementById("cursorPosition").value
  const maxTime = document.getElementById("maxTime").value
  const totalBeats = document.getElementById("totalBeats").value
  const value = convertValue(cursor, maxTime, totalBeats)
  document.getElementById("answer").innerText = value
}

const convertValue = function(cursorPosition, maxTime, totalBeats) {
  const pos = convert(toArrayOfNumbers(cursorPosition))
  const max = convert(toArrayOfNumbers(maxTime))
  return totalBeats - ((pos/max) * totalBeats)
}

const convert = function(arr) {
  return arr[0] + (arr[1] / 4) + (arr[2]/255/4)
}

const toArrayOfNumbers = function(incoming) {
  const arr = (incoming.split(".")).map(entry => parseInt(entry))
  return arr.concat(Array(3-arr.length).fill(0))
}

const pad_array = function(arr,len,fill) {
  return arr.concat(Array(len).fill(fill)).slice(0,len);
}
