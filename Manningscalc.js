function Calculate(){
  
 
  
  var n
  n = document.getElementById('n').value
  if (n<0) {
  alert('WARNING: Mannings n is negative')
  } else if (n>.1){
    alert('WARNING: Mannings n seems high')
  }
  if (n == 0) {
    alert('WARNING: Fill Mannings n')
  }
 

  
  var Rh
  Rh = document.getElementById('Rh').value
   if (Rh<0) {
  alert('WARNING: Rh is negative')
  }
  if (Rh == 0) {
    alert('WARNING: Fill in Rh')
  }
  
  var S
  S = document.getElementById('S').value
    if (S<0) {
  alert('WARNING: S is negative')
  }
  if (S == 0) {
    alert('WARNING: Fill in S')
  }
  
  
 
  
  if(document.getElementById('SI').checked) {
  var Velocity = (1/n)*Math.pow(Rh, 2/3)*Math.pow(S,1/2)
  var Vel = Velocity.toString();
  Answer.innerHTML = 'Calculated Velocity is ' + Vel + ' m/s'
}else if(document.getElementById('English').checked) {
  var Velocity = (1.486/n)*Math.pow(Rh, 2/3)*Math.pow(S,1/2)
  var Vel = Velocity.toString();
  Answer.innerHTML = 'Calculated Velocity is ' + Vel + ' ft/s'
}else {
  alert('Pick a Value for kn')
}
} 
