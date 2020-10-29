


function contador(){
    let hora = new Date();
    console.log(hora.getHours() + ":" + hora.getMinutes()+ ":" + hora.getSeconds());

    setTimeout( contador, 1000);
}

setTimeout( contador, 1000);