var t="";
var s="";

window.onload = function(){
    t = document.getElementById("id");
    s = document.getElementById("pw");
}

function login2(){
    if(t.value == "java" && s.value == "qwer1234"){
        alert("로그인 성공");
    } else{
        alert("로그인 실패");
    }
}