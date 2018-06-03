var size = prompt("Tamaño del tablero");
var flag = true;
var table = "";

for(let i = 0; i < size; i ++){
    for(let j = 0; j < size; j ++){
        if((j + 1) % 2 == 0 && flag){
            table += "#";
        }else if((j + 1) % 2 != 0 && flag){
            table += "_";
        }else if((j + 1) % 2 == 0 && !flag){
            table += "_";
        }else if((j + 1) % 2 != 0 && !flag){
            table += "#";
        }
    }
    table += "\n";
    flag = !flag;
}

console.log(table);