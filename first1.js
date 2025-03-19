let classtext=document.querySelector(".text");
let p1=document.querySelector("#p1score");
let p2=document.querySelector("#p2score");

const choices=document.querySelectorAll(".ibutton");


const compinput=()=>{
    let options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    const compchoice=options[idx];
    return compchoice;
};


const showWinner=(msg)=>{
    classtext.innerText=msg;
};

const score_updationp1=()=>{
    p1.innerText++;
};

const score_updationp2=()=>{
    p2.innerText++;
};

choices.forEach((ibutton)=>{
    ibutton.addEventListener("click",()=>{
        const userchoice=ibutton.getAttribute("id");
        console.log("UserChoice:",userchoice);
        const computer_choice=compinput();
        console.log("comp choice:",computer_choice);
        if(userchoice==computer_choice){
            showWinner("It was a Draw");
            classtext.style.backgroundColor="blue";
        }
        else if(userchoice==="rock"){
            if(computer_choice==="scissor"){
                showWinner("You have won");
                score_updationp1();
                classtext.style.backgroundColor="green";
            }
            else{
                showWinner("You Lost");
                score_updationp2();
                classtext.style.backgroundColor="red";
            }
        }
        else if(userchoice==="paper"){
            if(computer_choice==="rock"){
                showWinner("You have won");
                score_updationp1();
                classtext.style.backgroundColor="green";
            }
            else{
                showWinner("You Lost");
                score_updationp2();
                classtext.style.backgroundColor="red";
            }
        }
        else{
            if(computer_choice==="paper"){
                showWinner("You have won");
                score_updationp1();
                classtext.style.backgroundColor="green";
            }
            else{
                showWinner("You Lost");
                score_updationp2();
                classtext.style.backgroundColor="red";
            }
        }
    })
}
);