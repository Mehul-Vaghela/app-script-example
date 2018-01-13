# app-script-example
Track your spreadsheet and set triggers on any change made on sheet by any user..
Please follow below steps:
1)open your sheet and click on tools->script editor
2)remove other code from script editor and copy-paste script.js file code. In my example there are four columns A,B,C,D.
first row is Header text and Column A contains unique identity about each row.
->I'm checking below condition
->for all values of column B if x<1% send email with subject(column header-unique row indentity-new value) and whole table with background color and border highlighted.
->for all values of column C if x>1% send email with subject(column header-unique row indentity-new value) and whole table with background color and border highlighted.
->for all values of column D if x<1% send email with subject(column header-unique row indentity-new value) and whole table with background color and border highlighted.
3)now we need to set trigger for any change made on script by any user.
->click on edit button from header of your script editor
->edit->project triggers->create new trigger
4)done.
