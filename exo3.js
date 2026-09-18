import { NombreUn, Echanger } from "./exo2.js";

export function triLignes(M) {
  let n = M.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (NombreUn(M[j]) > NombreUn(M[j + 1])) {
        Echanger(M, j, j + 1);
      }
    }
  }

  return M;
}
