/**
* @OnlyCurrentDoc
*/

function checkFun(){
 var ss = SpreadsheetApp.getActiveSpreadsheet();
  var Avals = ss.getRange("A1:A").getValues();
  var Alast = Avals.filter(String).length;
  var Bvals = ss.getRange("B1:B").getValues();
  var Blast = Bvals.filter(String).length;
  var Cvals = ss.getRange("C1:C").getValues();
  var Clast = Cvals.filter(String).length;
  var Dvals = ss.getRange("D1:D").getValues();
  var Dlast = Dvals.filter(String).length;
  var cell = ss.getActiveCell().getA1Notation();
  var Bstyle='';
  var Cstyle='';
  var Dstyle='';
  var TABLEFORMAT = 'cellspacing="2" cellpadding="2" dir="ltr" border="1" style="width:100%;table-layout:fixed;font-size:10pt;font-family:arial,sans,sans-serif;border-collapse:collapse;border:1px solid #ccc;font-weight:normal;color:black;background-color:white;text-align:center;text-decoration:none;font-style:normal;'
  var htmltable = '<table ' + TABLEFORMAT +' ">';
  
  htmltable+='<tr><th>'+Avals[0]+'</th><th>'+Bvals[0]+'</th><th>'+Cvals[0]+'</th><th>'+Dvals[0]+'</th></tr>';
  
  for(var i = 1 ; i < Alast ; i++ ){
     if(Bvals[i] < 0.01){
       if('B'+i == cell){
         Bstyle='style="font-weight:900;background-color:red;border:5px solid yellow;'
       }else{
         Bstyle='style="background-color:red;'
       }
     
     }else{
       Bstyle='';
     }
    if(Cvals[i] > 0.01){
      if('C'+i == cell){
        Cstyle='style="font-weight:900;background-color:green;border:5px solid yellow;'
      }else{
        Cstyle='style="background-color:green;'
      }
     
    }else{
      Cstyle='';
    }
    if(Dvals[i] < 0.01){
      if('D'+i == cell){
         Dstyle='style="font-weight:900;background-color:blue;border:5px solid yellow;'
      }else{
         Dstyle='style="background-color:blue;'
      }
    
    }else{
      Dstyle='';
    }
    htmltable+='<tr><td>'+Avals[i]+'</td><td '+Bstyle+'">'+Bvals[i]*100+'%</td><td '+Cstyle+'">'+Cvals[i]*100+'%</td><td '+Dstyle+'">'+Dvals[i]*100+'%</td></tr>';
    
  }
  htmltable+='</table>';
  for(var i = 1 ; i <= Alast ; i++ ){
   
    if(Session.getActiveUser()!='yourmail@gmail.com'){
      if('B'+i == cell && ss.getActiveCell().getValue().toString() < 0.01){
        var subjectB=Bvals[0]+'-'+Avals[i-1]+'-'+ss.getActiveCell().getValue().toString();
        MailApp.sendEmail('your_email', subjectB,'',{htmlBody: htmltable});
      }
      if('C'+i == cell && ss.getActiveCell().getValue().toString() > 0.01){
        var subjectC=Cvals[0]+'-'+Avals[i-1]+'-'+ss.getActiveCell().getValue().toString();
        MailApp.sendEmail('your_email', subjectC,'',{htmlBody: htmltable});
      }
      if('D'+i == cell && ss.getActiveCell().getValue().toString() < 0.01){
        var subjectD=Dvals[0]+'-'+Avals[i-1]+'-'+ss.getActiveCell().getValue().toString();
        MailApp.sendEmail('your_email', subjectD,'', {htmlBody: htmltable});
      }
    }
    
  }

}

