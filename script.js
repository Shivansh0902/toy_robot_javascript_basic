
// inital robot as object
let x = null;
let y = null;
let facing = null;
let is_placed = false;



function place(ix,iy,ifacing){
    // directions which are valid for the robot
    const VALID_DIRECTION = ["NORTH", "EAST", "SOUTH", "WEST"];
    // first checking they are integers then procceeding to next step
    if (!( Number.isInteger(ix) && Number.isInteger(iy))){
        return false;
    }
    // checking if x and y are with the bounts of 0-4
    if (ix < 0 || ix > 4 || iy < 0 || iy > 4) {
        return false;
    }
    // if input given is not string then returning false
    if (typeof(ifacing) !== 'string'){
        return false;
    }
    // converting is facing to upper case 
    // using trim function to remove any extra spaces 
    let input_facing = ifacing.trim().toUpperCase();
    
    // checking if the facing is valid
    if (!(VALID_DIRECTION.includes(input_facing))){
        return false;
    }
    // once all conditions are met then robot can be placed on the table (grid)
    x = ix;
    y = iy;
    facing = input_facing;
    is_placed = true;
    return true;

}

function move(){
    let new_x = x;
    let new_y = y;

    if(!is_placed){
        return false;
    }

    if ( facing === "NORTH" ){
        new_y +=1;
    }
    else if ( facing === "SOUTH" ){
        new_y -=1;
    }
    else if ( facing === "EAST" ){
        new_x +=1;
    }
    else if ( facing === "WEST" ){
        new_x -=1;
    } 
    // checking if the new position is within bounds
    if (new_x < 0 || new_x > 4 || new_y <  0 || new_y > 4) {
        return false;
    }

    // updaing the new coordinates
    x = new_x;
    y = new_y;
    return true;    
}

function left(){
   
   if (!is_placed){
       return false;
    }
    let current_facing = facing.toLowerCase();

    if(current_facing === "north"){
        current_facing  = "west";
    }
    else if (current_facing === "west"){
        current_facing = "south"
    }
    else if(current_facing === "south"){
        current_facing = "east"
    }
    else if(current_facing === "east"){
        current_facing = "north"
    }

    // once direction changed the code should running accordingly 
    facing = current_facing.toUpperCase()
    return true
}

function right(){
    if (!is_placed){
       return false;
    }
    let current_facing = facing.toLowerCase();

    if(current_facing === "north"){
        current_facing  = "east";
    }
    else if (current_facing === "west"){
        current_facing = "north"
    }
    else if(current_facing === "south"){
        current_facing = "west"
    }
    else if(current_facing === "east"){
        current_facing = "south"
    }

    // once direction changed the code should running accordingly 
    facing = current_facing.toUpperCase()
    return true
}

function report(){
    if (is_placed){
        console.log("Output: " + x +" , " +y+" , "+ facing)
    }
}

// testing initial logic for the code 
// cases for the place function to work 
// place(10,3,"NORTH")     // false
// place(-1,2,"NORTH")     // false
// place(1,8,"NORTH")      // false
// report();
// place(2,-1,"NORTH")     // false
// place(1,1,"EASTERM")    // false
// place(0,0," South")     // true
// place(2,2," west " )    // true
// place(1,3,"east")       // true
// place(2,2,"west " )     // true
// report();
// move();

// test cases for the move function
// place(0,4,"NORTH");
// move();          
// report();
// place(0,4,"SOUTH");
// move(); // 0,3
// report();
// move();
// move();
// move();
// move();// 0,-1 as false but not moving 
// report();


// // test cases for the left function 
// place(2,3,"NORTH");
// report();
// left();
// report();
// move();          
// report();
// // test case 2 
// place(1,2,"east");
// report();
// left();
// move(); // 0,3
// report();
// move();
// move();
// move();
// move();// 0,-1 as false but not moving 
// report();

// test cases for the right function 
place(3,3,"NORTH");
report();
right();
report();
move();
right();          
report();
// test case 2 
place(4,2,"east");
report();
right();
move(); // 0,3
report();
move();
move();
right();
move();
move();// 0,-1 as false but not moving 
report();