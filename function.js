
    document.getElementById("button").addEventListener("click",toggle);
    document.getElementById("close").addEventListener("click",toggle);
    function toggle(){
        if(document.getElementById("navigation").style.display == "none"){
            document.getElementById("navigation").style.display = "block";
            document.getElementById("mobile").style.display = "none";
            document.getElementById("category").style.border = "none"
        }
        else{
            document.getElementById("navigation").style.display = "none";
            document.getElementById("mobile").style.display = "block";
            document.getElementById("category").style.borderTop = "2px solid gray"
        }
    }

    document.getElementById("sub-nav1").addEventListener("click",bottom1);
    document.getElementById("sub-nav2").addEventListener("click",bottom2);
    document.getElementById("sub-nav3").addEventListener("click",bottom3);

    function bottom1(){
        var li = document.getElementById("foot1").getElementsByTagName("li");
        for(let i=1;i<=2;i++){
            if(li[i].style.display==="none"){
                li[i].style.display="block";
            }
            else{
                li[i].style.display="none";
            }
        }
    }

    function bottom2(){
        var li = document.getElementById("foot2").getElementsByTagName("li");
        for(let i=1;i<=3;i++){
            if(li[i].style.display==="none"){
                li[i].style.display="block";
            }
            else{
                li[i].style.display="none";
            }
        }
    }

    function bottom3(){
        var li = document.getElementById("foot3").getElementsByTagName("li");
        for(let i=1;i<=4;i++){
            if(li[i].style.display==="none"){
                li[i].style.display="block";
            }
            else{
                li[i].style.display="none";
            }
        }
    }


document.getElementById("pilih").addEventListener("change",select);

function select(){
    var x = document.getElementById("pilih").value;
    if(x == 0){
        document.getElementById("top").style.display="block";
        document.getElementById("bottom").style.display="block";
    }
    else if(x == 1){
        document.getElementById("top").style.display="block";
        document.getElementById("bottom").style.display="none";
    }
    else if(x == 2){
        document.getElementById("top").style.display="none";
        document.getElementById("bottom").style.display="block";
    }
}




function valid(){
    var a = document.getElementById("name").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("phone").value;
    var d = document.getElementById("country").value;
    var e = document.getElementById("check").checked;

    var phoneo = /^\d{10}$/;

    
    //name
    if(a.length == 0){
        document.getElementById("name-error").style.display = "block";
    }
    else{
        document.getElementById("name-error").style.display = "none";
    }
    
    //email
    if(b.length == 0){
        document.getElementById("email-error").style.display = "block";
    }
    else if(!b.endsWith('@gmail.com')){
        document.getElementById("email-error").style.display = "block";
    }
    else if(b.startsWith('@gmail.com')){
        document.getElementById("email-error").style.display = "block";
    }
    else{
        document.getElementById("email-error").style.display = "none";
    }

    //phone
    if(c.length == 0){
        document.getElementById("phone-error").style.display = "block";
    }
    // else if(phone == n){
    //     document.getElementById("phone-error").style.display = "block";
    // }
    else{
        document.getElementById("phone-error").style.display = "none";
    }

    //country
    if(d == 0){
        document.getElementById("country-error").style.display = "block";
    }
    else{
        document.getElementById("country-error").style.display = "none";
    }

    //terms
    if(e == false){
        document.getElementById("term-error").style.display = "block";
    }
    else{
        document.getElementById("term-error").style.display = "none";
    }   

    
}