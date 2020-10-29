function factorial(num){
    if(num==0){
        return 1;
    } 
    else{
        return num*factorial(num-1);
    }
}

document.write("<table border='2'>");
document.write("<tr>");
        document.write("<td>Número</td>");
        document.write("<td>Factorial</td>");
    document.write("</tr>");

    for (var i=1; i<10; i++){
        document.write("<tr>");
            document.write("<td>"+i+"</td>");
            document.write("<td>"+factorial(i)+"</td>");
        document.write("</tr>");
    }
document.write("<table>");
