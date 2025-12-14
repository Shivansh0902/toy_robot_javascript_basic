
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
    if (!(ix >= 0 || ix <= 4 || iy >= 0 || iy <= 4)){
        return false;
    }
    // if input facing is not string then returning false
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

function move(){}
function left(){}
function right(){}
function report(){}


// testing initial logic for the code 
console.log(place(0,0,"NORTH"));
console.log(place(10,3,"NORTH"));
console.log(place(-1,2,"NORTH"));
console.log(place(1,8,"NORTH"));
console.log(place(2,-1,"NORTH"));
console.log(place(1,1,"EASTERM"));
console.log(place(0,0,"South"));
console.log(place(2,2,"west"));