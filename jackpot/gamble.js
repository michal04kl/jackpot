document.addEventListener("DOMContentLoaded", function() { 

        document.getElementById("send").addEventListener("click", function(event){
            event.preventDefault();
            var balans = document.getElementById("bal").value;
            if(balans == 0){
                alert("wprowadź balans");
            }else if(balans < 5){
                alert("za mały balans - minimum 5");
            }else{
            document.getElementById("balans").innerHTML=balans;
            document.getElementById("set").style.display="none";
            document.getElementById("game").style.display="flex";
            localStorage.setItem("limit", balans);
            };
        });

        document.getElementById("start").addEventListener("click", function(){
            var ai = 0
            var limit = localStorage.getItem("limit");
            var coin = document.getElementById("coin").elements["coin"].value;
            if(coin == ""){
                alert("wybierz za ile chcesz grać");
                let pola = document.getElementsByClassName("pole");
                for(let p = 0; p <= pola.length-1; p++){
                    pola[p].innerHTML="";
                };
                return false;
            }else if(coin == "ai"){
                ai = 1;
                coin = limit;
            };
            var rebalance = limit - coin;
            if(rebalance < 0){
                alert("twój balans jest za mały");
                let pola = document.getElementsByClassName("pole");
                for(let p = 0; p <= pola.length-1; p++){
                    pola[p].innerHTML="";
                };
            }else if(localStorage.getItem("limit") == 0){
                alert("nie masz juz pieniędzy");
                let pola = document.getElementsByClassName("pole");
                for(let p = 0; p <= pola.length-1; p++){
                    pola[p].innerHTML="";
                };
            }else{
                document.getElementById("start").style.display="none";
                let token = document.getElementsByClassName("coin");
                for(t = 0; t < token.length; t++){
                    if(token[t].getAttribute("value")!=coin){
                    token[t].disabled = true;
                    };
                    if(ai == 1){
                        token[token.length-1].disabled=false;
                    };
                };
                localStorage.setItem("limit", rebalance);
                document.getElementById("balans").innerHTML=rebalance;
            const symbols = ["$", "#", "@", "!", "&"];
            const wynik = [[0,0,0], 
                        [0,0,0],
                        [0,0,0]];
            var next = 0;
            var now = 0;
            let time = 0;
            for(let i = 0; i <= 8; i++){
                time = time + 1000;
                setTimeout(function(){
                document.getElementById("rn"+i).setAttribute("class", "stop");
                let los = symbols[Math.floor(Math.random() * 5)];
                wynik[next][now] = los;
                let pole = "r"+next+now;
                document.getElementById(pole).innerHTML=wynik[next][now];
                now++;
                if(now>=3){
                    now = 0;
                    next++;
                }}, time);
            };
            setTimeout(function(){
            let r00= wynik[0][0]; 
            let r01= wynik[0][1]; 
            let r02= wynik[0][2]; 
            let r10= wynik[1][0]; 
            let r11= wynik[1][1]; 
            let r12= wynik[1][2]; 
            let r20= wynik[2][0]; 
            let r21= wynik[2][1]; 
            let r22= wynik[2][2];
            let reward = 0;
            limit = localStorage.getItem("limit");
            if(r00 == r01 && r00 == r02){
                document.getElementById("row1").setAttribute("class", "luck");
                reward++;
            };
            if(r10 == r11 && r10 == r12){
                document.getElementById("row2").setAttribute("class", "luck");
                reward++;
            }; 
            if(r20 == r21 && r20 == r22){
                document.getElementById("row3").setAttribute("class", "luck");
                reward++;
            };
            if(r00 == r10 && r00 == r20){
                document.getElementById("r00").setAttribute("class", "luck");
                document.getElementById("r10").setAttribute("class", "luck");
                document.getElementById("r20").setAttribute("class", "luck");
                reward++;
            };
            if(r01 == r11 && r01 == r21){
                document.getElementById("r01").setAttribute("class", "luck");
                document.getElementById("r11").setAttribute("class", "luck");
                document.getElementById("r21").setAttribute("class", "luck");
                reward++;
            };
            if(r02 == r12 && r02 == r22){
                document.getElementById("r02").setAttribute("class", "luck");
                document.getElementById("r12").setAttribute("class", "luck");
                document.getElementById("r22").setAttribute("class", "luck");
                reward++;
            };
            if(r00 == r11 && r00 == r22){
                document.getElementById("r00").setAttribute("class", "luck");
                document.getElementById("r11").setAttribute("class", "luck");
                document.getElementById("r22").setAttribute("class", "luck");
                reward++;
            };
            if(r02 == r11 && r02 == r20){
                document.getElementById("r02").setAttribute("class", "luck");
                document.getElementById("r11").setAttribute("class", "luck");
                document.getElementById("r20").setAttribute("class", "luck");
                reward++;
            };
            if(reward==1){
                coin = coin * 1.5;
                limit = limit*1 + coin;
                localStorage.setItem("limit", limit);
                document.getElementById("balans").innerHTML=limit;
            };
            if(reward==2){
                coin = coin * 2;
                limit = limit*1 + coin;
                localStorage.setItem("limit", limit);
                document.getElementById("balans").innerHTML=limit;
            };
            if(reward==3){
                coin = coin * 3;
                limit = limit*1 + coin;
                localStorage.setItem("limit", limit);
                document.getElementById("balans").innerHTML=limit;
            };
            if(reward==4){
                coin = coin * 4;
                limit = limit*1 + coin;
                localStorage.setItem("limit", limit);
                document.getElementById("balans").innerHTML=limit;
            };            
            if(reward==5){
                coin = coin * 5;
                limit = limit*1 + coin;
                localStorage.setItem("limit", limit);
                document.getElementById("balans").innerHTML=limit;
            };
            if(reward==6){
                coin = coin * 6;
                limit = limit*1 + coin;
                localStorage.setItem("limit", limit);
                document.getElementById("balans").innerHTML=limit;
            };
            if(reward==7){
                coin = coin * 7;
                limit = limit*1 + coin;
                localStorage.setItem("limit", limit);
                document.getElementById("balans").innerHTML=limit;
            };
            if(reward==8){
                coin = coin * 8;
                limit = limit*1 + coin;
                localStorage.setItem("limit", limit);
                document.getElementById("balans").innerHTML=limit;
            };
            if(reward!=0){
                document.getElementById("balans").setAttribute("class", "up");
            }else{
                document.getElementById("balans").setAttribute("class", "down");
            };
            setTimeout(function(){
                document.getElementById("start").style.display="block";
                document.getElementById("row1").removeAttribute("class");  
                document.getElementById("row2").removeAttribute("class"); 
                document.getElementById("row3").removeAttribute("class");
                document.getElementById("balans").removeAttribute("class");
                var ek = document.querySelectorAll("td");
                for(e=0; e<ek.length; e++){
                    ek[e].setAttribute("class", "pole");
                };
            }, 2000);
            for(t = 0; t < token.length; t++){
                token[t].disabled = false;
            };
            reward = 0;
        }, 10000)}});
});
function losuj(){
    let pola = document.getElementsByClassName("pole");
    for(let p = 0; p <= pola.length-1; p++){
        pola[p].innerHTML="<p id='rn"+p+"' class='ran'></p>";
    };
};