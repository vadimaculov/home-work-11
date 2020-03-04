console.log(console.log);

var day = prompt('Enter day of the week');

/*  ВАРИАНТ-1 --Так работает, но кажется слишком сложным:
if (day == 'monday') {
    alert('Working day');
} else if (day == 'thursday') {
    alert('Working day');
} else if (day == 'wednesday') {
    alert('Working day');
} else if (day == 'thursday') {
    alert('Working day');
} else if (day == 'friday') {
    alert('Working day');
} else if (day == 'saturday') {
    alert('Weekend');
} else if (day == 'sunday') {
    alert('Weekend');
}
else {
    alert('Can not define, please try another value');
} */

/* Так при вводе любого значения выдает 'Working day' 
if (day == 'monday', 'thursday', 'wednesday', 'thursday', 'friday') {
    alert('Working day');
} else if (day == 'saturday', 'sunday') {
    alert('Weekend');
} else {
    alert('Can not define, please try another value');
} */

/* ВАРИАНТ2 Switch - не работает, если вводит значение с заглавной */
switch (day) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':    
    case 'thursday':
    case 'friday':
        alert( 'working day' ); break;
    case 'saturday':
     case 'sunday':   
        alert( 'weekand'); break;
}



