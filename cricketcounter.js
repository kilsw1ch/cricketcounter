const score=document.getElementById('score');

const outcomes=document.getElementById('outcomes');
const wickettype=document.getElementById('wickettype');
const extra=document.getElementById('extra');
const more=document.getElementById('more');

let runs=0;
let wickets=0;
let overs=0;
let balls=0;

function updatescore(){
    score.textContent=runs+" / "+wickets+" ("+overs+"."+balls+")";
}

function ball(){

    if(balls!=5){
        balls++;
        updatescore();
    }

    else{
        overs++;
        balls=0;
        updatescore();
    }
}

let ballhistory=[];

function recordball(x){

    let oversandballs=overs+"."+balls;
    ballhistory.push(oversandballs+":"+x);
}

{//runs
document.getElementById('dotbtn').onclick=function(){
    ball();
    recordball(0);
}

document.getElementById('onebtn').onclick=function(){
    runs++;
    ball();
    recordball(1);
}

document.getElementById('twobtn').onclick=function(){
    runs+=2;
    ball();
    recordball(2);
}

document.getElementById('threebtn').onclick=function(){
    runs+=3;
    ball();
    recordball(3);
}

document.getElementById('fourbtn').onclick=function(){
    runs+=4;
    ball();
    recordball(4);
}

document.getElementById('sixbtn').onclick=function(){
    runs+=6;
    ball();
    recordball(6);
}
}

{//wickets
document.getElementById('wicketbtn').onclick=function(){
    outcomes.style.display="none";
    wickettype.style.display="grid";
}

function closewickettype(){
    outcomes.style.display="grid";
    wickettype.style.display="none";
}

document.getElementById('bowledbtn').onclick=function(){
    wickets++;
    ball();
    recordball('W-bowled');
    updatescore();
    closewickettype();
}

document.getElementById('lbwbtn').onclick=function(){
    wickets++;
    ball();
    recordball('W-lbw');
    updatescore();
    closewickettype();
}

document.getElementById('caughtbtn').onclick=function(){
    wickets++;
    ball();
    recordball('W-caught');
    updatescore();
    closewickettype();
}

document.getElementById('stumpedbtn').onclick=function(){
    wickets++;
    ball();
    recordball('W-stumped');
    updatescore();
    closewickettype();
}

document.getElementById('runoutbtn').onclick=function(){
    wickets++;
    ball();
    recordball('W-runout');
    updatescore();
    closewickettype();
}

document.getElementById('hitwicketbtn').onclick=function(){
    wickets++;
    ball();
    recordball('W-hitwicket');
    updatescore();
    closewickettype();
}
}

document.getElementById('extrabtn').onclick=function(){
    outcomes.style.display="none";
    extra.style.display="grid";
}

function closeextras(){
    outcomes.style.display="grid";
    extra.style.display="none";
}

document.getElementById('morebtn').onclick=function(){
    outcomes.style.display="none";
    more.style.display="grid";
}

function closemore(){
    outcomes.style.display="grid";
    more.style.display="none";
}

console.log(ballhistory);