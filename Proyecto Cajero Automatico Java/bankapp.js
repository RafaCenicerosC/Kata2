let userdata={
    username: 'user#',
    firstName: 'firstName',
    lastName: 'lastName',
    cardNumber: '#### #### #### ####',
    mmExp: 'MM',
    yearExp: 'YY',
    ccv: '123',
    balance: 0
};
let movement;
let lastthreemovements =["","",""];
//Identificar Usuario
var usuario = getCookie("usuario");
if (usuario == "user1") {
  // Acciones específicas para el usuario1
  console.log("El usuario 1 accedio al sistema");
  userdata.username='user1';
  userdata.firstName= 'Rafael';
  userdata.lastName='Ceniceros';
  userdata.cardNumber='1234 5678 1234 5678';
  userdata.mmExp= '12';
  userdata. yearExp= '26';
  userdata.ccv='127';
  userdata.balance=500;
  console.log(userdata.username +" es: "+userdata.firstName+" "+userdata.lastName);
  changehomeinfo();
} else if (usuario == "user2") {
  // Acciones específicas para el usuario2
  console.log("El usuario 2 accedio al sistema");
  userdata.username='user2';
  userdata.firstName= 'Diego';
  userdata.lastName='Ceniceros';
  userdata.cardNumber='5478 7412 3698 2456';
  userdata.mmExp= '05';
  userdata. yearExp= '27';
  userdata.ccv='253';
  userdata.balance=100;
  console.log(userdata.username +" es: "+userdata.firstName+" "+userdata.lastName);
  changehomeinfo();
} else if (usuario == "user3") {
  // Acciones específicas para el usuario3
  console.log("El usuario 3 accedio al sistema");
  userdata.username='user3';
  userdata.firstName= 'Zuly';
  userdata.lastName='Ceballos';
  userdata.cardNumber='8956 7421 3654 2585';
  userdata.mmExp= '09';
  userdata. yearExp= '26';
  userdata.ccv='309';
  userdata.balance=900;
  console.log(userdata.username +" es: "+userdata.firstName+" "+userdata.lastName);
  changehomeinfo();
}

function changehomeinfo(){
    const nombreusuario = document.getElementById('nombreusuario');
    const numero = document.getElementById('numero');
    const nombre = document.getElementById('nombre');
    const expmonth = document.getElementById('expmonth');
    const expyear = document.getElementById('expyear');
    const ccv = document.getElementById('ccv');
    const lastfour = document.getElementById('lastfour');
  
    nombreusuario.innerHTML = "¡Hola "+userdata.firstName+"!";
    numero.innerHTML = userdata.cardNumber;
    nombre.innerHTML = userdata.firstName+" "+userdata.lastName;
    expmonth.innerHTML = userdata.mmExp;
    expyear.innerHTML = userdata.yearExp;
    ccv.innerHTML = userdata.ccv;
    lastfour.innerHTML = " # "+userdata.cardNumber.substring(userdata.cardNumber.length - 4);
    updatebalance();
    
}

function updatebalance(){
  const actualbalance = document.getElementById('actual-balance');
  actualbalance.innerHTML = userdata.balance;
}

function updatehistory(movement){
  const LastMove0 = document.getElementById('LastMove0');
  const LastMove1 = document.getElementById('LastMove1');
  const LastMove2 = document.getElementById('LastMove2');
  // Si el array ya tiene 3 elementos, elimina el primero:
  if (lastthreemovements.length === 3) {
    lastthreemovements.shift();
  }
  
  // Agrega el nuevo resultado al final del array:
  lastthreemovements.push(movement);
  LastMove0.innerHTML=lastthreemovements[0];
  LastMove1.innerHTML=lastthreemovements[1];
  LastMove2.innerHTML=lastthreemovements[2];
  console.log("last 3: " + lastthreemovements);
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
  const DepositAmount = parseInt(currentDeposit);
  console.log("Balance :" + userdata.balance)
  console.log("Se depositaran: " + DepositAmount);
  console.log("Balance sera: " + (DepositAmount + userdata.balance));

  if (DepositAmount > 0 && (DepositAmount + userdata.balance <= 990)) {
    clearDisplay();
    userdata.balance = DepositAmount + userdata.balance;
    updatebalance();
    movement= "+ $ "+DepositAmount;
    updatehistory(movement);
    DepositMessage.innerHTML = 'Se han depositado $'+DepositAmount +' a su cuenta';
    errorsignal.classList.remove('active');
    checksignal.classList.add('active');
    messagewindow.showModal();
  }
  else if ((DepositAmount + userdata.balance > 990) && (userdata.balance != 990)) {
    clearDisplay();
    DepositMessage.innerHTML = 'Su cuenta no puede tener más de $990. Deposite una cantidad menor';
    checksignal.classList.remove('active');
    errorsignal.classList.add('active');
    messagewindow.showModal();
  }
  else if (userdata.balance == 990) {
    clearDisplay();
    DepositMessage.innerHTML = 'Realice un retiro. Su cuenta no puede tener más de $990';
    checksignal.classList.remove('active');
    errorsignal.classList.add('active');
    messagewindow.showModal();
  }
  else if (currentDeposit == 0) {
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
  const WithdrawAmount = parseInt(currentWithdraw);
  console.log("Balance :" + userdata.balance)
  console.log("Se retiraran: " + WithdrawAmount);
  console.log("Balance sera: " + (userdata.balance - WithdrawAmount));

  if (WithdrawAmount > 0 && (userdata.balance - WithdrawAmount >= 10)) {
    clearDisplayW();
    userdata.balance = userdata.balance - WithdrawAmount;
    updatebalance();
    movement= "- $ "+WithdrawAmount;
    updatehistory(movement);
    WithdrawMessage.innerHTML = 'Se han retirado $'+WithdrawAmount+' de su cuenta';
    errorsignal.classList.remove('active');
    checksignal.classList.add('active');
    messagewindow.showModal();
  }
  else if ((userdata.balance - WithdrawAmount < 10) && (userdata.balance != 10) ){
    clearDisplayW();
    WithdrawMessage.innerHTML = 'Su cuenta no puede tener menos de $10. Retire una cantidad menor';
    checksignal.classList.remove('active');
    errorsignal.classList.add('active');
    messagewindow.showModal();
  }
  else if (userdata.balance == 10){
    clearDisplayW();
    WithdrawMessage.innerHTML = 'Su cuenta no puede tener menos de $10. Realice un deposito';
    checksignal.classList.remove('active');
    errorsignal.classList.add('active');
    messagewindow.showModal();
  }
  else if (currentWithdraw == 0) {
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
  if (tarjeta.classList.contains('active')) {
    tarjeta.classList.remove('active');
  }
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
  tarjeta.classList.toggle('active');
});

function changeaccountwindowstatus() {
  const accountmenu = document.getElementById('account-menu');
  const accountbutton = document.getElementById('account-btn');
  const arrowdown = document.getElementById('arrowdown');
  const arrowup = document.getElementById('arrowup');
  accountmenu.classList.toggle('active');
  accountbutton.classList.toggle('active');
  arrowdown.classList.toggle('active');
  arrowup.classList.toggle('active');
}

function logout() {
  document.cookie = "";
  window.location.href = "index.html";
}