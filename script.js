const btn = document.querySelectorAll('button');
const row = document.querySelectorAll('tr');
const col = document.querySelectorAll('td');

btn.forEach((button, i) => {
  button.addEventListener('click', () => {
    const nota = row[i + 1].children[1].textContent;
  if(nota >= 5){
    console.log('Aprovado');
    row[i + 1].classList.add('green');
  }else {
    console.log('Reprovado');
    row[i + 1].classList.add('red');
  }
  });
});