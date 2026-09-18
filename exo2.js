//2-1
export function Echanger(tab, i, j) {
  let valeurTemporaire = tab[i];
  tab[i] = tab[j];
  tab[j] = valeurTemporaire;
}



//2-2
export function Ranger(T) {
  let gauche = 0;

  for (let i = 0; i < T.length; i++) {
    if (T[i] === 0) {
      Echanger(T, i, gauche);
      gauche = gauche + 1;
    }
  }

  return T;
}

//2-3
export function NombreUn(T) {
  let compteur = 0;

  for (let i = 0; i < T.length; i++) {
    if (T[i] === 1) {
      compteur = compteur + 1;
    }
  }

  return compteur;
}