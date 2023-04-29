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
		//keyboard
		const display = document.getElementById('display') && document.getElementById('display2');
        let currentNumber = '';

        function appendNumber(number) {
            currentNumber += number;
            display.value = currentNumber;
        }

        function deleteLastDigit() {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        }

        function clearDisplay() {
            currentNumber = '';
            display.value = '';
        }

        function deposit() {
            currentNumber = '';
            display.value = '';
        }
        /*Ventana Emergente Deposito*/
        const depositbutton = document.getElementById('DepositButton');
        const depositwindow = document.getElementById('DepositWindow');
        const closebutton = document.getElementById('CloseButton');

        depositbutton.addEventListener('click', () => {
        depositwindow.showModal();
        });

        closebutton.addEventListener('click', () => {
        depositwindow.close();
        });

        /*Ventana Emergente Retiro*/
        const withdrawbutton = document.getElementById('WithdrawButton');
        const withdrawwindow = document.getElementById('WithdrawWindow');
        const closebutton2 = document.getElementById('CloseButton2');

        withdrawbutton.addEventListener('click', () => {
         withdrawwindow.showModal();
         });
 
         closebutton2.addEventListener('click', () => {
         withdrawwindow.close();
         });

         const tarjeta = document.querySelector('#tarjeta');
	
         // * Volteamos la tarjeta para mostrar el frente.
         const mostrarFrente = () => {
             if(tarjeta.classList.contains('active')){
                 tarjeta.classList.remove('active');
             }
         }
         
         // * Rotacion de la tarjeta
         tarjeta.addEventListener('click', () => {
             tarjeta.classList.toggle('active');
         });