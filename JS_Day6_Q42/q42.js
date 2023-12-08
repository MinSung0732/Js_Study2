function back(){
    return 100;
}

function eback(){
    return 200;
}

function abab(back,eback){

    var ob = back+eback;

    return ob;
}

var s = abab( back(), eback() );

document.write(s);