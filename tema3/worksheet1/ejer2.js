function lanzamiento(){
    return (Math.random()*(7-1)+1);
}

document.write("En esta tirada ha salido el número "+parseInt(lanzamiento()));