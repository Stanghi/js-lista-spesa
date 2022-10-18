/*
Abbiamo un array di alimenti.
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente 
con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
*/

const alimenti = ["Spaghetti", "Petto di pollo", "Pomodoro", "Ricotta", "pancetta", "Tonno", "Mele"];

// for loop
const forList = document.querySelector('.for-list');

for (let i = 0; i < alimenti.length; i++){
    const liFor = document.createElement('li');
    liFor.innerHTML = `${alimenti[i]}`;
    forList.append(liFor);
}

// while loop
const whileList = document.querySelector('.while-list');

let c = 0;
while (alimenti[c]) {
    const liWhile = document.createElement('li');
    liWhile.innerHTML = `${alimenti[c]}`;
    whileList.append(liWhile);
    c++;
}