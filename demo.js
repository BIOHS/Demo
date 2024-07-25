function doGet(e) {
    var x = HtmlService.createTemplateFromFile("index");
    var y = x.evaluate();
    var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    return z;
  }
  
  function checkLogin(email, password) {
    var url = 'https://docs.google.com/spreadsheets/d/1ve3t6WTuYhJNaLRfF2OUSuGqFIZMXHoLLZl39MGq2C0/edit?gid=0#gid=0';
    var ss= SpreadsheetApp.openByUrl(url);
    var webAppSheet = ss.getSheetByName("Login");
    var getLastRow =  webAppSheet.getLastRow();
    var found_record = 'FALSE';
    for (var i = 1; i <= getLastRow; i++){
        var emailCell = webAppSheet.getRange(i, 1);
        var passwordCell = webAppSheet.getRange(i, 2);
        if (!emailCell.isBlank() && !passwordCell.isBlank()) {
            if (emailCell.getValue().toString().toLowerCase() == email.toLowerCase() &&
                passwordCell.getValue().toString().toLowerCase() == password.toLowerCase()) {
            found_record = 'TRUE';
        break;
    } 

            }
        }
    return found_record;
    
  }
