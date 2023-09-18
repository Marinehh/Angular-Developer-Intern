// Function to generate a random color palette of 'num' colors
function generateColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rndColor = `rgb(${r}, ${g}, ${b})`;

        colors[i] = rndColor;
    }
    return colors;
}

// Function to generate the wall based on user inputs
function generateWall() {
    const inpWidth = document.getElementById('width');
    const inpHeight = document.getElementById('height');
    const inpColor = document.getElementById('color');

    const width = parseInt(inpWidth.value);
    const height = parseInt(inpHeight.value);
    const color = parseInt(inpColor.value);

    // Check user inputs
    if ( width <= 0 || height <= 0 || color <= 0 || !Number.isInteger(width) || !Number.isInteger(height) || !Number.isInteger(color) || width > 123 || height > 123 ) {
        alert("Please make sure that: \n 1) You've entered valid integers for width, height, and color count \n 2) Width and height are smaller than or equal to 123 (so that you can see the bricks!)");
        return;
    }

    // Clear content in the wall
    wall.innerHTML = '';

    const colors = generateColors(color);
    wall.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

    // Generate bricks and add them to the wall 
    for (let i = 0; i < width * height; i++) {
        const brick = document.createElement('div');
        brick.className = 'brick';

        const rndColor = colors[Math.floor(Math.random() * colors.length)];
        brick.style.backgroundColor = rndColor;

        function brickClick() {
            colorChange(brick, colors);
        }

        brick.addEventListener('click', brickClick);
        wall.appendChild(brick);
    }
}

// Function to change color when a brick is clicked
function colorChange(brick, colors) {
    const rndColor = colors[Math.floor(Math.random() * colors.length)];
    brick.style.backgroundColor = rndColor;
}

generateButton.addEventListener('click', generateWall);

generateWall();
