var coin;
//Earth XI: Heads
onEvent("btnHeads", "click", function( ) {
  coin = randomNumber(1, 2);
  CoinToss();
  //IF Condition for the coin toss result of Heads or Tails
  if (coin == 1) {
    setText("flipLbl", "Your team Earth XI wins");
  } else if ((coin == 2)) {
    setText("flipLbl", "Opponent team Aliens XI wins");
  }
});
// Earth XI: Tails
onEvent("btnTails", "click", function( ) {
  coin = randomNumber(1, 2);
  CoinToss();
  if (coin == 1) {
    setText("flipLbl", "Your team Earth XI wins");
    setImageURL("image1", "assets/Head.png");
  } else if ((coin == 2)) {
    setText("flipLbl", "Opponent team Aliens XI wins");
    setImageURL("image2", "assets/whale-tail.png");
  }
});
//Coin Toss Function
function CoinToss() {
  if (coin==1) {
  showElement("coin");
  setProperty("coin", "image", "assets/Head.png");
  setText("resultLbl", "It's Heads");
  }
  else if (coin==2) {
  showElement("coin");
  setProperty("coin", "image", "assets/whale-tail.png");
  setText("resultLbl", "It's Tails");
  }
  showElement("resultLbl");
  showElement("btnTossagain");
  hideElement("btnHeads");
  hideElement("btnTails");
}
onEvent("btnTossagain", "click", function( ) {
  setText("flipLbl","Choose Heads or Tails");
  showElement("btnHeads");
  showElement("btnTails");
  hideElement("btnTossagain");
  hideElement("resultLbl");
  hideElement("coin");
});
