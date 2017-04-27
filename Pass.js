//type checkString below
var mystring=0
function checkString (mystring){
    if(mystring.length>=8 && mystring.length<=20){
        return mystring;
    }
    else{
        throw new Error("The length is invalid");
    }
}

//type getString below
function getString(mystring){
    try{
        mynumber = checkString(mystring);
        console.log(mystring);
    }
    catch(e){
        console.log(e.message)
    }
}

getString("111111")
