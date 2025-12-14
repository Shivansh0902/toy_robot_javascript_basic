### Initial Assumption
the grid is 5x5 which means x and y limits from 0-4 , 0-4 so anything beyond would be falling of the table 
App should not stop because of any failed command and it should keep running which means only correct commands should be placed 
Also there should be a is_placed bolean which assumes inital state as false which means robot is not placed.

### Place function 
First working on the place function 
1. inital x and y should be null as currently robot is not placed 
2. also adding some checks if x and y are integers so if anything else added not counted and also they do not go outside the range from 0-4, 0-4 , where x is horizontal axis and y is veritical. 
3. if any other values from range of 0-4 then it should not be accepted.
4. for facing, it is a string directions ( should be able to accept lower case which is later converted to upper.) any other string values other then this is not accepted.

Once All these conditions are me, then robot is placed if not then robot is never placed.


### Move function 
