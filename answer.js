econst nbYear =function(p0, percent, aug, p){
  for(var year=0;p0<p;year++){
    p0+=Math.floor(p0*percent/100)+aug
  }
  return year
}


/* 
var can be use outside it scope
let can be use inside it scope
 */
