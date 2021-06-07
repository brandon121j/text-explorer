const prompt = require('prompt-sync')();
let x = Number(0);
let y = Number(0);
const line = ('-------------------------------------------------------------------');
const space = (' ');
console.log('Your goal is to reach North Carolina');
let coor = prompt(`Your coordinates are (${x},${y}). Would you like to go "up", "right", "down", or "left" `);


while (isNaN(coor)) {
    
    if (coor == 'up') {
        y = y + 1;
    }
    
    if (coor == 'down') {
        y = y - 1;
    }
    
    if (coor == 'right') {
        x = x + 1;
    }
    
    if (coor == 'left') {
        x = x - 1;
    }
    
    if (x == 0 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are in Kansas');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 1 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Missouri');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    
    if (x == 2 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Illinois');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 3 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Indiana');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 4 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Kentucky');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 5 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in West Virginia');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 6 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Virginia');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 0 && y == -1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Oklahoma');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 0 && y == -2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Texas');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    //Restricts movement outside of the US on Y Axis South
    if (x == 0 && y == -3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        y = -2;
    }

    if (x == 0 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Nebraska');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 0 && y == 2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in South Dakota');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 0 && y == 3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in North Dakota');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    // Restricts movement outside of the US on Y Axis North
    if (x == 0 && y == 4) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        y = 3;
    }

    if (x == 5 && y == -1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in North Carolina');
        console.log(space);
        console.log(line);
        console.log(space);
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('Congratulations you made it to North Carolina!');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 5 && y == -2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in South Carolina');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 5 && y == -3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Georgia');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 5 && y == -4 || x == 4 && y == -4) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Florida');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    // Restricts movement outside of the US 
    if (x == 5 && y == -5) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        y = -4;
    }


    if (x == 3 && y == -1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Tennessee');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 4 && y == -1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in North Carolina');
        console.log(space);
        console.log(line);
        console.log(space);
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('Congratulations! You made it to North Carolina');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 3 && y == -2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Alabama');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 4 && y == -2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in South Carolina');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 4 && y == -3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Georgia');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    
    // Restricts movement outside of the US
    if (x == 3 && y == -3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        y = -2;
    }

    if (x == 6 && y == -2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        x = 5;
    }

    if (x == 2 && y == -1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Kentucky');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 2 && y == -2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Tennessee');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 2 && y == -3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Mississippi');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    // Restricts movement outside of the US
    if (x == 2 && y == -4) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        y = -3;
    }

    if (x == 1 && y == -1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Arkansas');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 1 && y == -2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Louisiana');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    // Restricts movement outside of the US on the Y axis
    if (x == 1 && y == -3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        y = -2;
    }

    if (x == 1 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Iowa');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 2 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Illinois');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 3 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Indiana');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 4 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Ohio');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 5 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Pennsylvania');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 6 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in New York');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    // Restricts movement outside of the US on the X axis right
    if (x == 7 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        x = 6;
    }

    if (x == 1 && y == 2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Minnesota');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 2 && y == 2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Wisconsin');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 3 && y == 2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Michigan');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    // Restricts movement into Toronto
    if (x == 4 && y == 2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        x = 3;
    }

    if (x == 4 && y == 2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in New York');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 1 && y == 3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Minnesota');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 2 && y == 3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Wisconsin');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == 3 && y == 3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Michigan');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    // Restricts movement outside of the US on the X axis to Toronto
    if (x == 4 && y == 3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        x = 3;
    }

    if (x == -1 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Colorado');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -2 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Utah');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -2 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Nevada');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -3 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in California');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -1 && y == -1 || x == -1 && y == -2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in New Mexico');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -1 && y == -3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        y = -2
    }

    if (x == -2 && y == -1 || x == -2 && y == -2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Arizona');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -2 && y == -3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        y = -2
    }

    if (x == -3 && y == -1 || x == -3 && y == -2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in California');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    // Restricts movement outside of California on X axis
    if (x == -4 && y == -1 || x == -4 && y == -2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        x = -3;
    }

    if (x == -3 && y == -3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        y = -2;
    }

    if (x == -1 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Wyoming');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -2 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Idaho');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -3 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Oregon');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    // Restricts movement outside of the US on the X axis
    if (x == -4 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        x = -3;
    }

    if (x == -1 && y == 2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Wyoming');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -2 && y == 2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Idaho');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -2 && y == 2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Oregon');
        console.log(space);
        console.log(line);
        console.log(space);
    }
    // Restricts movement outside of the US on the Y axis
    if (x == -3 && y == 3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        y = 2;
    }

    if (x == -3 && y == 2) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Washington');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -1 && y == 3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Montana');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -2 && y == 3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Idaho');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    if (x == -3 && y == 3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in Washington');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    // Restricts movement outside of the US on the X axis
    if (x == -4 && y == 3) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        x = -3;
    }
    // Restricts movement outside of the US on the X axis with Y = 0
    if (x == -4 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        x = -3;
    }

    if (x == 7 && y == 0) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You cannot continue in this direction');
        console.log(space);
        console.log(line);
        console.log(space);
        x = 6;
    }

    // if (x == 6 && y == 0) {
    //     console.log(space);
    //     console.log(line);
    //     console.log(space);
    //     console.log('You cannot continue in this direction');
    //     console.log(space);
    //     console.log(line);
    //     console.log(space);
    //     x = 5;
    // }

    if (x == 6 && y == 1) {
        console.log(space);
        console.log(line);
        console.log(space);
        console.log('You are now in New Jersey');
        console.log(space);
        console.log(line);
        console.log(space);
    }

    coor = prompt(`Your coordinates are (${x},${y}). Would you like to go "up", "right", "down", or "left" `);
}

// right = 'right'

