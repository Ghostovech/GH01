function addone2(m3,y3){
document.getElementById('month').value=m3;
document.getElementById('year').value=y3;

var temes='';
switch (m3) {
  case 1:{temes='Январь'; break;}
  case 2:{temes='Февраль'; break;}
  case 3:{temes='Март'; break;}
  case 4:{temes='Апрель'; break;}
  case 5:{temes='Май'; break;}
  case 6:{temes='Июнь'; break;}
  case 7:{temes='Июль'; break;}
  case 8:{temes='Август'; break;}
  case 9:{temes='Сентябрь'; break;}
  case 10:{temes='Октябрь'; break;}
  case 11:{temes='Ноябрь'; break;}
  case 12:{temes='Декабрь'; break;}

}
document.getElementById('teda').innerHTML=temes+' '+y3;
}

function addone(zi){
var mes=document.getElementById('month').value;
var yer=document.getElementById('year').value;
mes=parseInt(mes);
yer=parseInt(yer);
if(zi==1){
if(mes==12){
mes=1;yer=yer+1;
}else{mes=mes+1;}
}
if(zi==0){
if(mes==1){
mes=12;yer=yer-1;
}else{mes=mes-1;}
}

document.getElementById('month').value=mes;
document.getElementById('year').value=yer;
var temes='';
switch (mes) {
  case 1:{temes='Январь'; break;}
  case 2:{temes='Февраль'; break;}
  case 3:{temes='Март'; break;}
  case 4:{temes='Апрель'; break;}
  case 5:{temes='Май'; break;}
  case 6:{temes='Июнь'; break;}
  case 7:{temes='Июль'; break;}
  case 8:{temes='Август'; break;}
  case 9:{temes='Сентябрь'; break;}
  case 10:{temes='Октябрь'; break;}
  case 11:{temes='Ноябрь'; break;}
  case 12:{temes='Декабрь'; break;}

}
document.getElementById('teda').innerHTML=temes+' '+yer;
}
