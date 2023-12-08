function cat(){
    this.name = "고양이";
    this.age = 5;
    this.weight = 8;
    this.family = "러시안 블루";
    this.color = "회색";
}

new cat();

var kitty = new cat();

kitty.name = "키티";
kitty.age = 5;
kitty.weight = 8;
kitty.family = "길고양이";
kitty.color = "흰색";


document.write(kitty.name+"<br>");
document.write(kitty.age+"<br>");
document.write(kitty.weight+"<br>");
document.write(kitty.family+"<br>");
document.write(kitty.color+"<br>");
