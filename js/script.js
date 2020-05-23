function greeting(){
    printstar();
    console.log("Welcoming Cadet "+ getCadetName());
    printline();
    /*Arror Functions */
var result = (id,name) => id+" "+name;
console.log(result(111,"Dave"));
}

function printstar(){
    console.log("*****************************************");
}
function printline(){
    console.log("______________________________________________")
}
function getCadetName(id,name){
    return id+" "+name;
}

function  submitData(){
    var studentId = document.getElementById("studentId").value;
    var studentName = document.studentForm.studentName.value;
    var dob = document.studentForm.dob.value;
    console.log(studentId+" "+studentName+" "+dob);
}

















