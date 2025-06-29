console.log('Edite a vontade ;)')

document.addEventListener('DOMContentLoaded', function() {
	const elementos = document.querySelectorAll('body');
	elementos.forEach((item, index) => {
		setTimeout(() => {
			item.classList.add('show');
		}, index * 200);
	});
})

const texto = document.getElementById('color')
const cores = ['blue', 'red']
let indice = 0

function mudarCor() {
	texto.style.color = cores[indice]
	indice = (indice+1) % cores.length
}

setInterval(mudarCor, 1000)

function saiu() {
	window.alert('Você está indo à um site externo, deseja continuar?')
}