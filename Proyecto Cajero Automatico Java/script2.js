//Identificar Usuario
var usuario = getCookie("usuario");
if (usuario == "user1") {
  // Acciones específicas para el usuario1
  console.log("El usuario 1 accedio al sistema");
  const userdata = {
    username: 'user1',
    firstName: 'Rafael',
    lastName: 'Ceniceros',
    cardNumber: '1234 5678 1234 5678',
    mmExp: '12',
    yearExp: '26',
    ccv: '127',
    balance: 1200
  }
  console.log(userdata.username +" es: "+userdata.firstName+" "+userdata.lastName);
  changehomeinfo(userdata);
} else if (usuario == "user2") {
  // Acciones específicas para el usuario2
  console.log("El usuario 2 accedio al sistema");
  const userdata = {
    username: 'user2',
    firstName: 'Diego',
    lastName: 'Ceballos',
    cardNumber: '2713 4567 7895 2167',
    mmExp: '02',
    yearExp: '25',
    ccv: '275',
    balance: 100
  }
  console.log(userdata.username +" es: "+userdata.firstName+" "+userdata.lastName);
  changehomeinfo(userdata);
} else if (usuario == "user3") {
  // Acciones específicas para el usuario3
  console.log("El usuario 3 accedio al sistema");
  const userdata = {
    username: 'user3',
    firstName: 'Zuly',
    lastName: 'Ceballos',
    cardNumber: '7456 4567 7856 7564',
    mmExp: '04',
    yearExp: '27',
    ccv: '634',
    balance: 100000
  }
  console.log(userdata.username +" es: "+userdata.firstName+" "+userdata.lastName);
  changehomeinfo(userdata);
}

function changehomeinfo(userdata){
    const nombreusuario = document.getElementById('nombreusuario');
    const numero = document.getElementById('numero');
    const nombre = document.getElementById('nombre');
    const expmonth = document.getElementById('expmonth');
    const expyear = document.getElementById('expyear');
    const ccv = document.getElementById('ccv');
    const lastfour = document.getElementById('lastfour');
    const actualbalance = document.getElementById('actual-balance');

    nombreusuario.innerHTML = "¡Hola "+userdata.firstName+"!";
    numero.innerHTML = userdata.cardNumber;
    nombre.innerHTML = userdata.firstName+" "+userdata.lastName;
    expmonth.innerHTML = userdata.mmExp;
    expyear.innerHTML = userdata.yearExp;
    ccv.innerHTML = userdata.ccv;
    lastfour.innerHTML = " # "+userdata.cardNumber.substring(userdata.cardNumber.length - 4);
    actualbalance.innerHTML = userdata.balance;

}


function getCookie(nombreCookie) {
    var nombre = nombreCookie + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(nombre) == 0) {
        return cookie.substring(nombre.length, cookie.length);
      }
    }
    return "";
  }

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
		//keyboard deposit
		const display = document.getElementById('display');
        let currentDeposit = '';

        function appendNumber(number) {
            currentDeposit += number;
            display.value = currentDeposit;
        }

        function deleteLastDigit() {
            currentDeposit = currentDeposit.slice(0, -1);
            display.value = currentDeposit;
        }

        function clearDisplay() {
            currentDeposit = '';
            display.value = '';
        }

        function deposit() {
            const DepositMessage = document.getElementById('mensajeDeposito');
            const messagewindow = document.getElementById('MessageWindow');
            const closebutton = document.getElementById('CloseButton');
            const errorsignal = document.getElementById('error');
            const checksignal = document.getElementById('no-error');

            if(currentDeposit>0)
            {
                clearDisplay();
                DepositMessage.innerHTML = 'Deposito Exitoso';
                errorsignal.classList.remove('active');
                checksignal.classList.add('active');
                messagewindow.showModal();
            }
            else if (currentDeposit==0){
                clearDisplay();
                DepositMessage.innerHTML = 'Ingrese una cantidad';
                checksignal.classList.remove('active');
                errorsignal.classList.add('active');
                messagewindow.showModal();
            }
            closebutton.addEventListener('click', () => {
            messagewindow.close();
            })
            
        }

        //keyboard withdraw
		const display2 = document.getElementById('display2');
        let currentWithdraw = '';

        function appendNumberW(number) {
            currentWithdraw += number;
            display2.value = currentWithdraw;
        }

        function deleteLastDigitW() {
            currentWithdraw = currentWithdraw.slice(0, -1);
            display2.value = currentWithdraw;
        }

        function clearDisplayW() {
            currentWithdraw = '';
            display2.value = '';
        }

        function withdraw() {
            const WithdrawMessage = document.getElementById('mensajeRetiro');
            const messagewindow = document.getElementById('MessageWindow2');
            const closebutton = document.getElementById('CloseButton2');
            const errorsignal = document.getElementById('error2');
            const checksignal = document.getElementById('no-error2');

            if(currentWithdraw>0)
            {
                clearDisplayW();
                WithdrawMessage.innerHTML = 'Retiro Exitoso';
                errorsignal.classList.remove('active');
                checksignal.classList.add('active');
                messagewindow.showModal();
            }
            else if (currentWithdraw==0){
                clearDisplayW();
                WithdrawMessage.innerHTML = 'Ingrese una cantidad';
                checksignal.classList.remove('active');
                errorsignal.classList.add('active');
                messagewindow.showModal();
            }
            closebutton.addEventListener('click', () => {
            messagewindow.close();
            })
        }

        //Inicio mostrar tarjetas
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

         function changeaccountwindowstatus(){
          const accountmenu = document.getElementById('account-menu');
          const accountbutton = document.getElementById('account-btn');
          const arrowdown = document.getElementById('arrowdown');
          const arrowup = document.getElementById('arrowup');
          accountmenu.classList.toggle('active');
          accountbutton.classList.toggle('active');
          arrowdown.classList.toggle('active');
          arrowup.classList.toggle('active');
         }
         
         function logout(){
          document.cookie = "";
          window.location.href = "index.html";
         }