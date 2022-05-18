function shuffleBogo(arr) {
  var shuffled = [];
  var rand;
  while (arr.length !== 0) {
    rand = Math.floor(Math.random() * arr.length);
    shuffled.push(arr.splice(rand, 1)[0]);
  }
  return shuffled;
}

function sortedBogo(shuffle) {
  for (var i = 0; i < shuffle.length - 1; i++) {
    if (shuffle[i] <= shuffle[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return shuffle;
}

function bogo_sort(arr) {

  let ordenado = false;
  while (ordenado == false) {
    let a = shuffleBogo(arr);
    ordenado = sortedBogo(a);
    arr = a;
  }

  return ordenado;
}
