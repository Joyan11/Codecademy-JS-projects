let input =' Hello';
let vowel =['a','e','i','o','u'];

let resultArray =[];

for (let i=0; i<input.length;i++){
  for(let j=0;j<vowel.length;j++){
   if (input[i]===vowel[j]){  
    if(input[i]==='e' ){
      resultArray.push('ee');
    } else if(input[i]==='u' ){
      resultArray.push('uu');
    }else{
      resultArray.push(input[i]);
    }
  }
}
}
console.log(resultArray.join('').toUpperCase());
