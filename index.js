function longestCommonPrefix(strings) {
   if(strings.lenth===0)
   {
    return ''
   };
   let comman=""
   let first=strings[0]
   let last=strings[strings.length-1]
   for (let index = 0; index <= first.length-1; index++) {
    if(first[index]===last[index])
    {
        comman+=first[index]

    }
    else{
        break
    }
    
   }
   return comman
  }
  
  // Example usage:
  const strings = ['go', 'google']
  
  const result = longestCommonPrefix(strings);
  console.log(result); // Output: 'fl'
  