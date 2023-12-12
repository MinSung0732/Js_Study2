var t="";
var s="";

window.onload = function(){
    t = document.getElementById("id");
    s = document.getElementById("pw");
}

function login2(){
    alert("아이디: "+t.value+"\n비밀번호: "+s.value);
}