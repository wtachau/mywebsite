import { randomElement } from "utilities/ArrayUtilities";
import {
  animate,
  defaultRender,
  addCanvas,
  removeCanvas
} from "utilities/AnimationUtilities";

import brick from "brick/main";
import pong from "pong/main";
import snake from "snake/main";
import snood from "snood/main";
import tetris from "tetris/main";
import twenty48 from "twenty48/main";

let paused = false;
const pauseElement = document.getElementById("pause");
const playElement = document.getElementById("play");

const pauseGame = () => {
  paused = true;
  pauseElement.style.display = "none";
  playElement.style.display = "block";
};

const resumeGame = () => {
  paused = false;
  pauseElement.style.display = "block";
  playElement.style.display = "none";
};

const togglePause = () => {
  paused ? resumeGame() : pauseGame();
};

const isPaused = () => {
  return paused;
};

addCanvas();

const chosenGame = randomElement([tetris, pong, brick, snake, snood, twenty48]);
const args = [animate, defaultRender, isPaused, togglePause];

chosenGame(...args);

// To prevent scroll on down key, and set pause for space
document.body.addEventListener("keydown", e => {
  if (e.keyCode === 40) {
    // down arrow
    e.preventDefault();
  } else if (e.keyCode === 32) {
    // space
    e.preventDefault();
    togglePause();
  }
});

if (module.hot) {
  const reset = () => {
    removeCanvas();
    addCanvas();

    chosenGame(...args);
  };
  module.hot.accept("pong/main", reset);
  module.hot.accept("brick/main", reset);
  module.hot.accept("snake/main", reset);
  module.hot.accept("tetris/main", reset);
  module.hot.accept("snood/main", reset);
  module.hot.accept("twenty48/main", reset);
  module.hot.accept("utilities/AnimationUtilities", reset);
}
