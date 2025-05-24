const words = [
	{ ru: 'Член', he: 'זין' },
	{ ru: 'Человек', he: 'אדם' },
	{ ru: 'Жопа', he: 'תחת' },
];

const add = document.querySelector('#add');

add.addEventListener('click', () => {
  const divBackground = document.createElement('div');
  divBackground.classList.toggle('div-background', true);
  let randomIndex = Math.floor(Math.random() * words.length);
  divBackground.innerHTML = `
  <div class="cart">
  <h1>${words[randomIndex].ru}</h1>
  <input type="text", placeholder="Введите перевод">
  </div>`;
  document.body.appendChild(divBackground);
  const input = divBackground.querySelector('input');
  input.addEventListener('keydown', event =>{
    let h1 = divBackground.querySelector('h1');
    if (event.key === 'Enter' && input.value === words[randomIndex].he){
      divBackground.style.background = 'green';
      setTimeout(() => {
        divBackground.style.background = 'linear-gradient(100deg, #0287e7, #2759e4, #3225e4)';
        randomIndex = Math.floor(Math.random() * words.length);
        h1.textContent = words[randomIndex].ru;
      }, 1000);
    }else if (event.key === 'Enter' && input.value !== words[randomIndex].he) {
			divBackground.style.background = 'red';
      setTimeout(() => {divBackground.style.background ='linear-gradient(100deg, #0287e7, #2759e4, #3225e4)'}, 1000);
		}
  });
});
