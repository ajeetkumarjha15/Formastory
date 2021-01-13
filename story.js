function myFunction(){
        const animal1 = document.getElementById("animal1").value;
        localStorage.setItem('inp1',animal1);

        const animal2 = document.getElementById("animal12").value;
        localStorage.setItem('inp2',animal2);

        const animal3 = document.getElementById("animal13").value;
        localStorage.setItem('inp3',animal3);

        const adjective = document.getElementById("adj1").value;
        localStorage.setItem('inp4',adjective);

        const verb = document.getElementById("verb1").value;
        localStorage.setItem('inp5',verb);

        const number = document.getElementById("num").value;
        localStorage.setItem('inp6',number);

        const rspeed = document.getElementById("rspeed").value;
        localStorage.setItem('inp8',rspeed);
        
        const quote = document.getElementById("quote-choices").value;
        localStorage.setItem('inp9',quote);

        const message = document.getElementById("message").value;
        localStorage.setItem('inp10',message);

         if(document.getElementById("yes").checked){
            const x = document.getElementById("yes").value;
             localStorage.setItem("inp7",x);
         }
         else if(document.getElementById("no").checked){
            const x = document.getElementById("no").value;
             localStorage.setItem("inp7",x);
         }
         else{
             var x="yes";
             localStorage.setItem("inp7",x);
         }           
               
    
    for(var i=0;i<8;i++){
        document.getElementsByClassName("tiger")[i].innerHTML=localStorage.getItem('inp1');
        }
        for(var i=0;i<9;i++){
        document.getElementsByClassName("lion")[i].innerHTML=localStorage.getItem('inp2');
        }
    
         document.getElementById("yes").innerHTML=localStorage.getItem('inp7');
         
         document.getElementById("quick").innerHTML=localStorage.getItem('inp8');
         document.getElementById("alarm").innerHTML=localStorage.getItem('inp4');
        document.getElementById("dog").innerHTML=localStorage.getItem('inp3');
        document.getElementById("exam").innerHTML=localStorage.getItem('inp6');
    
        for(var i=0;i<3;i++){
        document.getElementsByClassName("running")[i].innerHTML=localStorage.getItem('inp5');
        }
    
         document.getElementById("two").innerHTML=localStorage.getItem('inp9');
         document.getElementById("msg1").innerHTML=localStorage.getItem('inp10');
    }