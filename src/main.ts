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
  name: 'Menu',
  order: 0,
  entities: [
    'GameInterface',
    'MainCamera',
    // 'Cube',
    'World',
    // 'ExitDoor',
    // 'Door',
    // 'WallFrontal',
    // 'FloorPrototype',
    // 'Wall',
    // 'SecondCamera',
    'Hero',
    // 'Grass',
    // 'Stair',
    // 'Water',
    // 'World',
    
    'Sun',
    'Dirlight',
    // 'Sun',
    // 'Dirlight',
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
    
    'FloorPrototype',
    // 'Wall',
    'Hero',
    'Sun',
    'Dirlight',
  ],
  scripts: [
    'Level2Script',
  ],
  childScenes: [],
});

// WORKAROUD
setTimeout(() => {
  GAME.start();
},300);

// globalThis.addEventListener('keypress', () => {

//   if (!gameRunning) {
//     GAME.start();
//     gameRunning = true
//   }
// })
