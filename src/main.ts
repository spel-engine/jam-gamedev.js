import { SPEL } from '@spel/core';
import { entities } from './entities/entities.ts';
import { scripts } from './scripts/scripts.ts';
import { resources } from './resources/resources.ts';

const GAME = new SPEL({
  graphics: {
    scaleFactor: 32,
    // antialias: true,
  },
  physics: {
    gravity: {
      x: 0.0,
      y: -9.0,
      z: -9.0,
    },
  },
  systems: [],
  debug: true,
});


GAME.init({ entities, resources, scripts})

GAME.addScene({
  name: 'MainMenu',
  order: 0,
  entities: [
    'MainMenu',
    'MainCamera',
  ],
  scripts: [],
  childScenes: [],
});

GAME.addScene({
  name: 'Level 1',
  order: 1,
  entities: [
    'GameInterface',
    'MainCamera',
    'Hero',
    'Sun',
    'Dirlight',
  ],
  scripts: ['Level1Script'],
  childScenes: [],
});

GAME.addScene({
  name: 'Level 2',
  order: 2,
  entities: [
    'GameInterface',
    'MainCamera',
    'Hero',
    'Sun',
    'Dirlight',
  ],
  scripts: [
    'Level2Script',
  ],
  childScenes: [],
});

GAME.addScene({
  name: 'Level 3',
  order: 3,
  entities: [
    'GameInterface',
    'MainCamera',
    'Hero',
    'Sun',
    'Dirlight',
  ],
  scripts: [
    'Level3Script',
  ],
  childScenes: [],
});

// WORKAROUD
setTimeout(() => {
  GAME.start();
},600);

// globalThis.addEventListener('keypress', () => {

//   if (!gameRunning) {
//     GAME.start();
//     gameRunning = true
//   }
// })
