function kaupa() {
    var magn = document.getElementById("amountofproduct").value;
    console.log(magn)
    if (magn < 5){
        console.log("Þarft að minnst að panta 5 pakka")
        alert("Þarft að minnst að panta 5 pakka fyrir fría heimsendingu");
    }
    else{
        console.log("þetta er rétt magn")
    }
  }