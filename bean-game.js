// Starts a new game
kaplay();

// Load a bean
loadBean();

// Add the bean
const bean = add([
    sprite("bean"), // add sprite
    pos(center()), // set position, center of the screen
    scale(4), // set scale
    anchor("center"), // set anchor, pivot
    rotate(45), // set rotation
]);

// Movement
onKeyDown("right", () => {
    bean.move(200, 0);
});
onKeyDown("left", () => {
    bean.move(-200, 0);
});
onKeyDown("down", () => {
    bean.move(0, 200);
});
onKeyDown("up", () => {
    bean.move(0, -200);
});