function cat(){
    this.name = "고양이";
    this.age = 5;
    this.weight = 8;
    this.family = "러시안 블루";
    this.color = "회색";
    this.crying = function(){
        document.write("야옹");
    }
    this.eat = function(food){
        document.write(this.name + " 가(이) " + food + " 를(을) 먹습니다.")
    }
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

new cat();

var yaongi = new cat();

yaongi.name = "야옹이";
yaongi.age = 4;
yaongi.weight = 5;
yaongi.family = "점박이";
yaongi.color = "흰색 검은색";

document.write("<br>"+yaongi.name+"<br>");
document.write(yaongi.age+"<br>");
document.write(yaongi.weight+"<br>");
document.write(yaongi.family+"<br>");
document.write(yaongi.color+"<br><br>");

if(kitty.age > yaongi.age){
    document.write("나이 많은 고양이: "+kitty.name+"<br>");
} else{
    document.write("나이 많은 고양이: "+yaongi.name+"<br>");
}

if(kitty.weight > yaongi.weight){
    document.write("무거운 고양이: "+kitty.name+"<br>");
} else{
    document.write("무거운 고양이: "+yaongi.name+"<br>");
}

document.write("<br>");
yaongi.crying();
document.write("<br>");
kitty.crying();
document.write("<br>");

kitty.eat("츄르");