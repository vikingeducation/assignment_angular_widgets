function permutations(string){
  result = [];

  for(var idx = 0; idx < string.length; idx++){
    string = string.substring(idx, string.length) + string.substring(0, idx);
    for(var i = 0; i < string.length; i++){
      var word = "";
      word += string[i];  
    }
    result.push(word);
  }

}