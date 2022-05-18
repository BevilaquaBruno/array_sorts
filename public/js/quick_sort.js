function quick_sort(vet) {
  return quickSortF(vet, 0, vet.length - 1);
}

function quickSortF(vet, ini, fim) {
  var i = ini;
  var f = fim;
  var m = Math.floor((i + f) / 2);

  while (i < f) {
    while (vet[i] < vet[m]) i++;

    while (vet[f] > vet[m]) f--;

    if (i <= f) {
      var temp = vet[i];
      vet[i] = vet[f];
      vet[f] = temp;
      i++;
      f--;
    }
  }

  if (f > ini) quickSortF(vet, ini, f);

  if (i < fim) quickSortF(vet, i, fim);

  return vet;
}
