
var randomnumber1  = Math.random();
randomnumber1 = Math.floor(randomnumber1*6) + 1;


var image1 = document.getElementById("img1");
if(randomnumber1 == 1)
{
    image1.setAttribute("src","images/dice1.png");
    
}
else if(randomnumber1==2)
{
    image1.setAttribute("src","images/dice2.png");
}
else if(randomnumber1==3)
{
    image1.setAttribute("src","images/dice3.png");
}
else if(randomnumber1==4)
{
    image1.setAttribute("src","images/dice4.png");
}
else if(randomnumber1==5)
{
    image1.setAttribute("src","images/dice5.png");
}
else
{
    image1.setAttribute("src","images/dice6.png");
}

var randomnumber2  = Math.random();
randomnumber2 = Math.floor(randomnumber2*6) + 1;


var image2 = document.getElementById("img2");
if(randomnumber2 == 1)
{
    image2.setAttribute("src","images/dice1.png");
    
}
else if(randomnumber2==2)
{
    image2.setAttribute("src","images/dice2.png");
}
else if(randomnumber2==3)
{
    image2.setAttribute("src","images/dice3.png");
}
else if(randomnumber2==4)
{
    image2.setAttribute("src","images/dice4.png");
}
else if(randomnumber2==5)
{
    image2.setAttribute("src","images/dice5.png");
}
else
{
    image2.setAttribute("src","images/dice6.png");
}

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    document.querySelector("h2").innerHTML = "Refresh to play";
  }
  else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    document.querySelector("h2").innerHTML = "Refresh to play";

  }
  else {
    document.querySelector("h1").innerHTML = "Draw! ";
    document.querySelector("h2").innerHTML = "Refresh to play";
  }

  