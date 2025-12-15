# Toy Robot Quesiton 

### Initial Assumption
the grid is 5x5 which means x and y limits from 0-4 , 0-4 so anything beyond would be falling of the table 
App should not stop because of any failed command and it should keep running which means only correct commands should be placed 
Also there should be a is_placed bolean which assumes inital state as false which means robot is not placed.

### Place function 
First working on the place function 
1. inital x and y should be null as currently robot is not placed 
2. also adding some checks if x and y are integers so if anything else added not taken and also they do not lie outside the range from 0-4, 0-4 , where x is horizontal axis and y is veritical. 
3. if any other values from range of 0-4 then it should not be accepted.
4. for facing, it is a string directions ( should be able to accept lower case which is later converted to upper.) any other string values other then this is not accepted.

Once All these conditions are me, then robot is placed if not then robot is never placed.


### Move function 
1. once the placed function is valid and robot is placed
2. Each move attempts to move the robot one step forward in the direction it is facing.here what i assume is that when robot reaches to any one end of the grid which is either any sides of grip (x,4) or (4,y), it will fall it should not move after that, similar condition in the placed and stop there until command is changed.
3. if the direction is north then y +=1 , if south, y-=1 , if same for east and west x +/-=1 for the movement 
4. once it reaches the end it should not be able to fall, the robot ignores the command after that it stays where it is.

### Left Function
1. first check robot is placed or not, if not return false
2. then check the direction, since it is anticlock wise then for north = left = west
  similarly west = south, south = east, east = north 
3. update the direction for overall 

### Right Function
1. first check robot is placed or not, if not return false
2. then check the direction, since it is clock wise then for north = right = east
  similarly west = north, south = west, east = south
3. update the direction for overall 

### report function
1. if not placed, return not robot not placed yet else,return a string of message 


## Html part and UI
### for HTML 
1. used basic html due to time constraints where i used two input fields and a select field where user can put the desired value
2. added different buttons for the different operations like place, left and right etc
3. used preformated text for better spacing and view for the output field 

## for UI logic
1. for the displaying the multiple fields i started doing it by using a list storing the result and viewing full sequence of commands and results.
2. called a function 'log' which is responsible for the adding new message to list and converts array into 1 string and displayed in UI.
3. handle place function is responsible for excuting the place function taking inputs from the text filed and select and using values in place function, if place is correct it will display the message if not it would say out of bounds
4. handle move , left and right are basically calling the respective functions which straight away if they are true prints the message if not asks for correct command 

