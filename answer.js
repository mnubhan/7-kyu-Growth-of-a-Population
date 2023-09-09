const nbYear =function(p0, percent, aug, p){
  for(var year=0;p0<p;year++){
    p0+=(p0*percent/100)+aug
  }
  return year
}
