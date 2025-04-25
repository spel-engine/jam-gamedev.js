import { HeroScript } from './hero-script.ts';
import { GameInterfaceScript } from './game-interface-script.ts';
import { CameraScript } from './camera-script.ts';
import { Level2Script } from './levels/level-2-scrpit.ts';
import { DoorScript } from './door-script.ts';
import { Level3Script } from './levels/level-3-scrpit.ts';
import { Level1Script } from './levels/level-1-scrpit.ts';
import { FloorScript } from './floor-script.ts';

// @ts-ignore
export const scripts: Map<string, unknown> = new Map([
  ['HeroScript', HeroScript],
  ['GameInterfaceScript', GameInterfaceScript],
  ['CameraScript', CameraScript],
  ['Level1Script', Level1Script],
  ['Level2Script', Level2Script],
  ['Level3Script', Level3Script],
  ['DoorScript', DoorScript],
  ['FloorScript', FloorScript],
]);
