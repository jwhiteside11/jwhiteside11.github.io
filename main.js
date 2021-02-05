// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const counter = document.querySelector('#counter');
const timer = document.querySelector('#timer');
const winner = document.querySelector('.winner');

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// ball counter

let ballCount = 0;

function countUpdate() {
  counter.textContent = ballCount;
}

// timer

let startTime = new Date().getTime();

function elapsedTime() {
  currentTime = new Date().getTime();
  return ((currentTime - startTime) /1000).toFixed(2);
}

function appendTime() {
  timer.textContent = elapsedTime();
}

// Shape class

class Shape {
  constructor(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size,0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
        }
      }
    }
  }
}

// Ball class for bouncing balls (inherits Shape)

class Ball extends Shape {
  constructor(x, y, velX, velY, exists, color, size) {
    super(x, y, velX, velY, exists)
    this.color = color;
    this.size = size;
  }

  collisionDetect() {
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j]) && balls[j].exists) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
        }
      }
    }
  }
}

// EvilCircle class for user-controlled circle (inherits Shape)

class EvilCircle extends Shape {
  constructor(x, y, exists) {
    super(x, y, exists);
    this.velX = 20;
    this.velY = 20;
    this.color = 'white'
    this.size = 20
  }

  draw() {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size,0, 2 * Math.PI);
    ctx.stroke();
  }

  checkBounds() {
    if ((this.x + this.size) >= width) {
      this.x = width - this.size;
    }

    if ((this.x - this.size) <= 0) {
      this.x = this.size;
    }

    if ((this.y + this.size) >= height) {
      this.y = height - this.size;
    }

    if ((this.y - this.size) <= 0) {
      this.y = this.size;
    }
  }

  setControls() {
    let _this = this;
    window.onkeydown = function(e) {
      if (e.key === 'a') {
        _this.x -= _this.velX;
      } else if (e.key === 'd') {
        _this.x += _this.velX;
      } else if (e.key === 'w') {
        _this.y -= _this.velY;
      } else if (e.key === 's') {
        _this.y += _this.velY;
      }
    }
  }

  collisionDetect() {
    for (let j = 0; j < balls.length; j++) {
      if (balls[j].exists) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance - this.size < balls[j].size) {
          balls[j].exists = false;
          ballCount--;
        }
      }
    }
  }
}

// define animation loop, which draws a smei-transparent black canvas covering all then an updated frame

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].exists === true) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();
    countUpdate();
    if (ballCount > 0) {
      appendTime();
      winner.setAttribute('style', 'display:none');
    } else {
      winner.setAttribute('style', 'display: block');
    }
  }

  requestAnimationFrame(loop);
}

// instantiate balls

let balls = [];

while (balls.length < 25) {
  ballCount += 1
  let size = random(10, 25);
  let ball = new Ball(
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    true,
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );

  balls.push(ball);
}

// instantiate user-controlled circle

let evilCircle = new EvilCircle(
  random(0 + 20, width - 20),
  random(0 + 20,height - 20),
  true
)
evilCircle.setControls();

// call animation loop

loop();
