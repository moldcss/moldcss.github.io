function calcCps() {
  varCap501 = 501;
  varMyCP = document.querySelector('#myCPrank').value;
  varCPdiff = varCap501 - varMyCP;
  varReqCPcurrent = varCPdiff * 400000;
  varReqCPcurrent = varReqCPcurrent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.querySelector('#reqXPcurrent').innerHTML = varReqCPcurrent;
  varReqCP2point2perRank = 0;
  varReqCP2point2total = 0;
  var i=varMyCP;
  varWeird= Math.pow(501,0.95);
  
  while (i < 501) {
    varReqCP2point2perRank = ((i / varWeird) + 0.08) * 400000;
    varReqCP2point2total = varReqCP2point2total + varReqCP2point2perRank;
    i++;
  }
  varReqCP2point2total = Math.round(varReqCP2point2total);
  varReqCP2point2total = varReqCP2point2total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.querySelector('#reqXP2point2').innerHTML = varReqCP2point2total;
}

(function(d) {
  d.querySelector('#submit-form').addEventListener('click', function() {
    calcCps();
    d.querySelector('.results').style.display = "block";
  });
})(document);