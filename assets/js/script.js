/*
Abbiamo un array di alimenti.
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente 
con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
*/

// for loop
const alimenti = ["Spaghetti", "Petto di pollo", "Pomodoro", "Ricotta", "pancetta", "Tonno", "Mele"];
console.log(alimenti);

for (let i = 0; i < alimenti.length; i++){
    console.log(alimenti[i]);
    document.getElementById('for').innerHTML += `${alimenti[i]}<br>`;
}