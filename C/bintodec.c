#include <stddef.h>

unsigned zsquare(unsigned n)
{
   if (n == 0) {
       return 1;
   }
   unsigned res = 1;
   for (unsigned i = 1; i <= n; i++)
   {
     res *= 2;
   }
   return res;
}

unsigned binary_array_to_numbers(const unsigned *bits, size_t count)
{
  unsigned dec = 0;
  for (unsigned i = 0; i < count; i++) 
  {
    dec += bits[count-i-1] * zsquare(i);
  }
  return dec;
}