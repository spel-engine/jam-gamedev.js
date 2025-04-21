import MainCamera from './main-camera.json' with { type: "json" };
import Hero from './hero.json' with { type: "json" };
import GameInterface from './game-interface.json' with { type: "json" };
import Sun from './sun.json' with { type: "json" };
import Dirlight from './dirligth.json' with { type: "json" };
import World from './world.json' with { type: "json" };

import Wall from './prototype_world/wall.json' with { type: "json" };
import WallFrontal from './prototype_world/wall-frontal.json' with { type: "json" };
import ExitDoor from './prototype_world/exit-door.json' with { type: "json" };
import Door from './prototype_world/door.json' with { type: "json" };
import FloorPrototype from './prototype_world/floor-prototype.json' with { type: "json" };

// @ts-ignore
export const entities: Map<string, any> = new Map([
  // @ts-ignore
  ['MainCamera', MainCamera],
  ['Wall', Wall],
  ['WallFrontal', WallFrontal],
  ['Door', Door],
  ['ExitDoor', ExitDoor],
  ['FloorPrototype', FloorPrototype],
  ['Hero', Hero],
  ['GameInterface', GameInterface],

  ['World', World],
  ['Sun', Sun],
  ['Dirlight', Dirlight],
]);
