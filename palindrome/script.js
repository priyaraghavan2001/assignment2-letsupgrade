s = " i speak malayalam "
  s1 = ""
  s2 = ""
  for(t of s){
  
    if(t != " "){
      s1 = s1 + t 
      s2 = t + s2
    }
    else{
      if(s1 == s2){
        console.log(s1)
      }
    s1 = ""
    s2 = ""
    }
  }