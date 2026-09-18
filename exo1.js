export function NegatifPositif(tab) {
  let gauche = 0;

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] <= 0) {
      let temp = tab[gauche];
      tab[gauche] = tab[i];
      tab[i] = temp;

      gauche = gauche + 1;
    }
  }

  return tab;
}