function findKthSmallest() {
  const k = parseInt(document.getElementById("k").value);
  const array = document
    .getElementById("array")
    .value.split(",")
    .map((x) => parseInt(x.trim()));

  if (k > array.length || k < 1) {
    document.getElementById("result").innerText =
      "Please enter a valid value for K.";
    return;
  }

  const sortedArray = array.slice().sort((a, b) => a - b);
  const kthSmallest = sortedArray[k - 1];
  const highest = Math.max(...array);
  document.getElementById(
    "result"
  ).innerText = `Kth smallest element is: ${kthSmallest} and the highest value is: ${highest}`;
}

function findHighest() {
  const array = document
    .getElementById("array")
    .value.split(",")
    .map((x) => parseInt(x.trim()));

  if (array.length === 0) {
    document.getElementById("result").innerText = "Please enter a valid array.";
    return;
  }

  const highest = Math.max(...array);
  document.getElementById(
    "result"
  ).innerText = `The highest value is: ${highest}`;
}
