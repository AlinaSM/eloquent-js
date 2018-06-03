var cadena = "";

for(var i = 0; i < 5; i++){
    for(var j = 0; j < i + 1; j++){
        cadena +="*";
    }
    cadena+="\n";
}

console.log(cadena);