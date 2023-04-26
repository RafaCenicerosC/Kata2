const lis = document.querySelectorAll('.li')
const bloques = document.querySelectorAll('.bloque')

		lis.forEach((li, i) => {
			li.addEventListener('click', () => {
				lis.forEach((li, i) => {
					li.classList.remove('activo');
					bloques[i].classList.remove('activo');
				});
				li.classList.add('activo');
				bloques[i].classList.add('activo');
			});
		});