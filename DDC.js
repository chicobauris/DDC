console.log('Edite a vontade ;)')

document.addEventListener('DOMContentLoaded', function() {
	const elementos = document.querySelectorAll('.text');
	elementos.forEach((item, index) => {
		setTimeout(() => {
			item.classList.add('show');
		}, index * 200);
	});
})