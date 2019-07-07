export default function capital_letters(str) {
  let space = false;
  let dash = false;
  
  for (let i = 0; i < str.length; i++) {
  	if(str[i] === "-") {
      dash = true;    	
    }
  }
  if(dash === true) {
  	str = str.split("-");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join("-");
  }else{
  	str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
  }    
}

