var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60)
    };
var canvas = document.createElement("canvas");
var normal_speed = 4;
canvas.width = $(window).width();
canvas.height = $(window).height();
var context = canvas.getContext('2d');
var player = new Player();
var computer = new Computer();
var ball = new Ball($(window).width()/4, $(window).height()/2);

var keysDown = {};

var render = function () {
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    context.fillRect(0, 0, $(window).width(), $(window).height());
    context.fillStyle = "#000000";
    player.render();
    computer.render();
    ball.render();
};

var update = function () {
    player.update();
    computer.update(ball);
    ball.update(player.paddle, computer.paddle);
};

var step = function () {
    update();
    render();
    animate(step);
};

function Paddle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.x_speed = 0;
    this.y_speed = 0;
}

Paddle.prototype.render = function () {
    context.fillStyle = "#0DFD55";
    context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    this.x_speed = x;
    this.y_speed = y;
    if (this.y < 0) {
        this.y = 0;
        this.y_speed = 0;
    } else if (this.y + this.height > $(window).height()) {
        this.y = $(window).height() - this.height;
        this.y_speed = 0;
    }
};

function Computer() {
    this.paddle = new Paddle(10, 175, 10, 50);
}

Computer.prototype.render = function () {
    this.paddle.render();
};

Computer.prototype.update = function (ball) {
    var y_pos = ball.y;
    var diff = -((this.paddle.y + (this.paddle.height / 2)) - y_pos);
    if (diff < 0 && diff < -4) {
        diff = -5;
    } else if (diff > 0 && diff > 4) {
        diff = 5;
    }
    this.paddle.move(0, diff);
    if (this.paddle.y < 0) {
        this.paddle.y = 0;
    } else if (this.paddle.y + this.paddle.height > $(window).height()) {
        this.paddle.y = $(window).height() - this.paddle.height;
    }
};

function Player() {
    this.paddle = new Paddle($(window).width() - 20, 175, 10, 50);
}

Player.prototype.render = function () {
    this.paddle.x = $(window).width() - 20;
    this.paddle.render();
};

Player.prototype.update = function () {
    for (var key in keysDown) {
        var value = Number(key);
        if (value == 38) {
            this.paddle.move(0, -4);
        } else if (value == 40) {
            this.paddle.move(0, 4);
        } else {
            this.paddle.move(0, 0);
        }
    }
};

function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.x_speed = normal_speed;
    this.y_speed = 1;
}

Ball.prototype.render = function () {
    context.beginPath();
    context.arc(this.x, this.y, 5, 2 * Math.PI, false);
    context.fillStyle = "#0DFD55";
    context.fill();
};

Ball.prototype.update = function (paddle1, paddle2) {
    this.x += this.x_speed;
    this.y += this.y_speed;
    var top_x = this.x - 5;
    var top_y = this.y - 5;
    var bottom_x = this.x + 5;
    var bottom_y = this.y + 5;

    // bounce off the top or bottom
    if (this.y - 5 < 0) {
        this.y = 5;
        this.y_speed = -this.y_speed;
    } else if (this.y + 5 > $(window).height()) {
        this.y = $(window).height() - 5;
        this.y_speed = -this.y_speed;
    }

    // goes off the left or right
    if (this.x < 0 || this.x > $(window).width()) {
        this.x_speed = normal_speed;
        this.y_speed = 1;
        this.x = $(window).width()/4;
        this.y = $(window).height()/2;
    }

    // hits right paddle
    if (top_x > $(window).width()/2) {
        if (top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x && top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y) {
            this.x_speed = -normal_speed;
            this.y_speed += (paddle1.y_speed / 2);
            this.x += this.x_speed;
        }
    // hits left paddle
    } else {
        if (top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x && top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y) {
            this.x_speed = normal_speed;
            this.y_speed += (paddle2.y_speed / 2);
            this.x += this.x_speed;
        }
    }
};

document.body.appendChild(canvas);
animate(step);

window.addEventListener("keydown", function (event) {
    keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];
});