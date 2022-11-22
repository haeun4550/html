var p=[1,2,3,4,5,6];
var r=[0,0,0,0,0,0];
document.write("내 번호<br>");
for(var a=0; a<=5; a++){
    document.write(p[a]+"<br>");
}
document.write("<hr>");
document.write("로또번호<br>");
///////////////중복처리///////////////////////////////////
r[0]=Math.floor(Math.random() * 45) + 1;
document.write(r[0]);
br();
while(true){
    r[1]=Math.floor(Math.random() * 45) + 1;
    if(r[0]!=r[1]){
        document.write(r[1]);
        br();
    break;
    }
}
while(true){
    r[2]=Math.floor(Math.random() * 45) + 1;
    if(r[0]!=r[2] && r[1]!=r[2]){
        document.write(r[2]);
        br();
    break;
    }
}
while(true){
    r[3]=Math.floor(Math.random() * 45) + 1;
    if(r[0]!=r[3] && r[1]!=r[3] && r[2]!=r[3]){
        document.write(r[3]);
        br();
    break;
    }
}
while(true){
    r[4]=Math.floor(Math.random() * 45) + 1;
    if(r[0]!=r[4] && r[1]!=r[4] && r[2]!=r[4] && r[3]!=r[4]){
        document.write(r[4]);
        br();
    break;
    }
}
while(true){
    r[5]=Math.floor(Math.random() * 45) + 1;
    if(r[0]!=r[5] && r[1]!=r[5] && r[2]!=r[5] && r[3]!=r[5] && r[4]!=r[5]){
        document.write(r[5]);
        br();
    break;
    }
}
while(true){
    var rBonus=Math.floor(Math.random() * 45) + 1;
    if(r[0]!=rBonus && r[1]!=rBonus && r[2]!=rBonus && r[3]!=rBonus && r[4]!=rBonus && r[5]!=rBonus){
        document.write("보너스:"+ rBonus);
        br();
    break;
    }
}
////////////중복처리////////////////////////
////////////일치확인//////////////////
var win = 0;
for(var i=0;i<=5;i++ ){
    for(var j=0;j<=5;j++){
        if(p[i]==r[j]){
            win=win+1;
        }
    }
}
document.write(win+"개 당첨입니다.");
br();
if(win==0 || win==1 || win==2){
    document.write("꽝입니다.");
}
if(win==3){
    document.write("5등 입니다.");
}
if(win==4){
    document.write("4등 입니다.");
}
if(win==5){
    document.write("3등 입니다.");
     for(var k=0;k<=5;k++){
        if(win==5 && rBonus==p[k]){
            document.write("2등 입니다.");
        }
    }
}  
if(win==6){
    document.write("1등 입니다.");
}
//////////////일치확인//////////////
