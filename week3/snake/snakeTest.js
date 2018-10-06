( () => {

    const ok = [];

// before start, snake is in start position
    ok.push(T === pEquals(snake[0])(pair (10) (5)));

// after one step, snake has moved up
    nextBoard();
    ok.push(T === pEquals(snake[0])(pair (10) (4)));

// before eating food, snake is of size 4
    ok.push(snake.length === 4);

// after eating food, snake has grown in size
    food = pair (10) (3);
    nextBoard();
    ok.push(snake.length === 5);

// current direction is north
    ok.push(direction === north);

// when I go clockwise, I end up east
    changeDirection(clockwise);
    ok.push(direction === east);

// going counterclockwise, we end up north again
    changeDirection(countercw);
    ok.push(direction === north);

// test result report
    if (ok.every(elem => elem)) {
        document.writeln("All " + ok.length + " tests ok.");
    } else {
        document.writeln("Not all tests ok! Details:");
        for (let i = 0; i < ok.length; i++) {
            if (ok[i]) {
                document.writeln("Test " + i + " ok");
            } else {
                document.writeln("Test " + i + " failed");
            }
        }
    }

})  ();