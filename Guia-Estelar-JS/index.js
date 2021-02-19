// Função construtora
function Player(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;

  this.right = false;
  this.left = false;
  this.up = false;
  this.down = false;

  // Função anônima em arrow function
  this.move = (x, y) => {
    this.x += x;
    this.y += y;
    return this;
  };

  this.tick = () => {
    if(this.right) {
      this.x += this.speed;
    }

    if(this.left) {
      this.x -= this.speed;
    }

    if(this.up) {
      this.y -= this.speed;
    }

    if(this.down) {
      this.y += this.speed;
    }
  };

  this.render = (ctx) => {
    ctx.fillStyle = "rgb(224, 72, 38)";
    ctx.fillRect(this.x, this.y, 16, 16);
  };
}

function Game(player) {
  this.player = player;

  this.tick = () => {
    this.player.tick();
  };

  this.render = (ctx) => {
    ctx.fillStyle = "rgb(38, 224, 212)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    this.player.render(ctx);
  };
}

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const player = new Player(32, 32, 2.5);
const game = new Game(player);

game.tick();
game.render(context);