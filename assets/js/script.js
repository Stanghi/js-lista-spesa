/*
Abbiamo un array di alimenti.
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente 
con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
*/

const alimenti = ["Spaghetti", "Petto di pollo", "Pomodoro", "Ricotta", "pancetta", "Tonno", "Mele"];

// for loop
for (let i = 0; i < alimenti.length; i++){
    document.getElementById('for').innerHTML += `${alimenti[i]}<br>`;
}

// while loop
let c = 0;
while (alimenti[c]) {
    document.getElementById('while').innerHTML += `${alimenti[c]}<br>`;
    c++;
}