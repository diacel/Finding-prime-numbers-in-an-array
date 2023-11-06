function isPrime(num) 
{
   if (num < 2) 
   {
      return false;
   }

   for (let i = 2; i < num; i++) 
   {
      if (num % i === 0) 
      {
         return false;
      }
   }
   return true;
}

function getPrimes(limit) 
{
   let limit_arr = [1,23,4,67,8,45,9];
   let arr = [];

   for (let i = 0; i < limit_arr.length; i++) 
   {
      if (isPrime(limit_arr[i])) 
      {
         arr.push(limit_arr[i]);
      }
   }
   return arr;
}

console.log(getPrimes());