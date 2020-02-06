function Convert(){
  
  
  var input
  input = document.getElementById('input').value
  
  var inputunit
  inputunit = document.getElementById('inputunit').value
  
  var outputunit
  outputunit = document.getElementById('outputunit').value
  
  var Answer
  Answer = document.getElementById('Answer').value
  
  if (inputunit == "Inches" & outputunit == "Feet"){
    document.getElementById('Answer').value = input / 12
  }
  if (inputunit == "Inches" & outputunit == "Yards"){
    document.getElementById('Answer').value = input / 36
  } 
  if (inputunit == "Inches" & outputunit == "Miles"){
    document.getElementById('Answer').value = input / 12 / 5280
  }
  if (inputunit == "Inches" & outputunit == "Centimeters"){
    document.getElementById('Answer').value = input /.39370
  } 
  if (inputunit == "Inches" & outputunit == "Meters"){
    document.getElementById('Answer').value = input /39.370
  } 
  if (inputunit == "Inches" & outputunit == "Kilometers"){
    document.getElementById('Answer').value = input /39370
  } 
  if (inputunit == "Inches" & outputunit == "Inches"){
    document.getElementById('Answer').value = input
  } 
  
  
  
  if (inputunit == "Feet" & outputunit == "Inches"){
    document.getElementById('Answer').value = input * 12
  }
  if (inputunit == "Feet" & outputunit == "Yards"){
    document.getElementById('Answer').value = input / 3
  } 
  if (inputunit == "Feet" & outputunit == "Miles"){
    document.getElementById('Answer').value = input / 5280
  }
  if (inputunit == "Feet" & outputunit == "Centimeters"){
    document.getElementById('Answer').value = input /0.032808
  } 
  if (inputunit == "Feet" & outputunit == "Meters"){
    document.getElementById('Answer').value = input /3.2808
  } 
  if (inputunit == "Feet" & outputunit == "Kilometers"){
    document.getElementById('Answer').value = input /3280.8
  } 
  if (inputunit == "Feet" & outputunit == "Feet"){
    document.getElementById('Answer').value = input
  } 
  
  
  
  if (inputunit == "Yards" & outputunit == "Inches"){
    document.getElementById('Answer').value = input * 36
  }
  if (inputunit == "Yards" & outputunit == "Feet"){
    document.getElementById('Answer').value = input * 3
  } 
  if (inputunit == "Yards" & outputunit == "Miles"){
    document.getElementById('Answer').value = input / 5280 * 3
  }
  if (inputunit == "Yards" & outputunit == "Centimeters"){
    document.getElementById('Answer').value = input / 0.010936
  } 
  if (inputunit == "Yards" & outputunit == "Meters"){
    document.getElementById('Answer').value = input / 1.0936
  } 
  if (inputunit == "Yards" & outputunit == "Kilometers"){
    document.getElementById('Answer').value = input / 1093.6
  } 
  if (inputunit == "Yards" & outputunit == "Yards"){
    document.getElementById('Answer').value = input
  } 
  
  
  
   if (inputunit == "Miles" & outputunit == "Inches"){
    document.getElementById('Answer').value = input * 5280*12
  }
  if (inputunit == "Miles" & outputunit == "Feet"){
    document.getElementById('Answer').value = input * 5280
  } 
  if (inputunit == "Miles" & outputunit == "Miles"){
    document.getElementById('Answer').value = input 
  }
  if (inputunit == "Miles" & outputunit == "Centimeters"){
    document.getElementById('Answer').value = input / 0.0000062137
  } 
  if (inputunit == "Miles" & outputunit == "Meters"){
    document.getElementById('Answer').value = input / 0.00062137
  } 
  if (inputunit == "Miles" & outputunit == "Kilometers"){
    document.getElementById('Answer').value = input / 0.62137
  } 
  if (inputunit == "Miles" & outputunit == "Yards"){
    document.getElementById('Answer').value = input * 1760
  } 
  
  
  
  if (inputunit == "Centimeters" & outputunit == "Inches"){
    document.getElementById('Answer').value = input * 0.39370
  }
  if (inputunit == "Centimeters" & outputunit == "Feet"){
    document.getElementById('Answer').value = input * 0.032808
  } 
  if (inputunit == "Centimeters" & outputunit == "Miles"){
    document.getElementById('Answer').value = input * 0.0000062137
  }
  if (inputunit == "Centimeters" & outputunit == "Centimeters"){
    document.getElementById('Answer').value = input
  } 
  if (inputunit == "Centimeters" & outputunit == "Meters"){
    document.getElementById('Answer').value = input / 100
  } 
  if (inputunit == "Centimeters" & outputunit == "Kilometers"){
    document.getElementById('Answer').value = input / 100000
  } 
  if (inputunit == "Centimeters" & outputunit == "Yards"){
    document.getElementById('Answer').value = input * .010936
  } 
  
  
  
  if (inputunit == "Meters" & outputunit == "Inches"){
    document.getElementById('Answer').value = input * 39.370
  }
  if (inputunit == "Meters" & outputunit == "Feet"){
    document.getElementById('Answer').value = input * 3.2808
  } 
  if (inputunit == "Meters" & outputunit == "Miles"){
    document.getElementById('Answer').value = input / .00062137
  }
  if (inputunit == "Meters" & outputunit == "Centimeters"){
    document.getElementById('Answer').value = input * 100
  } 
  if (inputunit == "Meters" & outputunit == "Meters"){
    document.getElementById('Answer').value = input 
  } 
  if (inputunit == "Meters" & outputunit == "Kilometers"){
    document.getElementById('Answer').value = input / 1000
  } 
  if (inputunit == "Meters" & outputunit == "Yards"){
    document.getElementById('Answer').value = input *1.0936
  } 
  
  
  
    if (inputunit == "Kilometers" & outputunit == "Inches"){
    document.getElementById('Answer').value = input *39370
  }
  if (inputunit == "Kilometers" & outputunit == "Feet"){
    document.getElementById('Answer').value = input * 3280.8
  } 
  if (inputunit == "Kilometers" & outputunit == "Miles"){
    document.getElementById('Answer').value = input * .62137
  }
  if (inputunit == "Kilometers" & outputunit == "Centimeters"){
    document.getElementById('Answer').value = input * 100000
  } 
  if (inputunit == "Kilometers" & outputunit == "Meters"){
    document.getElementById('Answer').value = input * 1000
  } 
  if (inputunit == "Kilometers" & outputunit == "Kilometers"){
    document.getElementById('Answer').value = input
  } 
  if (inputunit == "Kilometers" & outputunit == "Yards"){
    document.getElementById('Answer').value = input *1093.6
  } 
}
