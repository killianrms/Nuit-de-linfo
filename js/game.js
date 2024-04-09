
// ajout du canvas pour mettre l'entierté du jeu
const app = new PIXI.Application({ 
  width: 640, 
  height: 360 
});
document.body.appendChild(app.view);

// ajout des différentes variables utiles
let score = 0;
let keys = {};

// ajout du chargement des Sprites 
let textureFL = PIXI.Texture.from('images/game/note.png');
let noteFarLeft = new PIXI.Sprite(textureFL);

let textureFR = PIXI.Texture.from('images/game/note.png');
let noteFarRight = new PIXI.Sprite(textureFR);

let textureCL = PIXI.Texture.from('images/game/note.png');
let noteCloseLeft = new PIXI.Sprite(textureCL);

let textureCR = PIXI.Texture.from('images/game/note.png');
let noteCloseRight = new PIXI.Sprite(textureCR);

// Pour fixer les tailles des Sprites 
noteFarLeft.width = 60;
noteFarLeft.height = 20;
noteFarRight.width = 60;
noteFarRight.height = 20;
noteCloseLeft.width = 60;
noteCloseLeft.height = 20;
noteCloseRight.width = 60;
noteCloseRight.height = 20;

// Pour fixer la position des notes
noteFarLeft.x = app.screen.width / 2 - 90;
noteFarLeft.y = 0;
noteFarRight.x = app.screen.width / 2 + 90;
noteFarRight.y = 0;
noteCloseLeft.x = app.screen.width / 2 - 30;
noteCloseLeft.y = 0;
noteCloseRight.x = app.screen.width / 2 + 30;
noteCloseRight.y = 0;

// Créer le container pour toutes les notes
let containerSpriteNotes = new PIXI.Container();
containerSpriteNotes.addChild(noteFarLeft);
containerSpriteNotes.addChild(noteFarRight);
containerSpriteNotes.addChild(noteCloseLeft);
containerSpriteNotes.addChild(noteCloseRight);

// Créer le rectangle de collision
let collisionRectangle = new PIXI.Graphics();
collisionRectangle.beginFill(0xFFFFFF, 0.2);
console.log(app.height, app.width);
collisionRectangle.drawRect(0, app.screen.height - 40, app.screen.width, 30);
collisionRectangle.endFill();
app.stage.addChild(collisionRectangle);

// fonction pour faire descendre une note
function descendre(note) {
  note.y = note.y + 2;
  if (note.y > app.screen.height) {
    note.y = 0;
  }
}

// ajout pour gérer les keydowns
document.addEventListener ('keydown', keysDown); 
document.addEventListener ('keyup', keysUp);

function keysDown(e) {
  keys[e.keyCode] = true;
}

function keysUp(e) {
  keys[e.keyCode] = false;
}

// ajout de texte 
let textScore = new PIXI.Text('Score: ' + score, { fontFamily: 'Arial', fontSize: 20, fill: '#FFFFFF' });
textScore.x = 10;
textScore.y = 5;
app.stage.addChild(textScore);

// boucle d'affichage
app.ticker.add(gameLoop)

function gameLoop() {
  app.stage.addChild(collisionRectangle);
  containerSpriteNotes.children.forEach(descendre);
  app.stage.addChild(containerSpriteNotes);
  textScore.text = 'Score: ' + score;
  app.stage.addChild(textScore);

  if (keys[68] === true && noteFarLeft.getBounds().intersects(collisionRectangle.getBounds())) {
    score += 1;
    noteFarLeft.y = 0;
  }
  if (keys[70] === true && noteFarLeft.getBounds().intersects(collisionRectangle.getBounds())) {
    score += 1;
    noteCloseLeft.y = 0;
  }
  if (keys[74] === true && noteFarLeft.getBounds().intersects(collisionRectangle.getBounds())) {
    score += 1
    noteCloseRight.y = 0;
  }
  if (keys[75] === true && noteFarLeft.getBounds().intersects(collisionRectangle.getBounds())) {
    score += 1;
    noteFarRight.y = 0;
  }
}
