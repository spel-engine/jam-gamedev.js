import { HeroScript } from './hero-script.ts';
import { GameInterfaceScript } from './game-interface-script.ts';
import { WorldScript } from './world-script.ts';
import { CameraScript } from './camera-script.ts';
import { Level2Script } from './levels/level-2-scrpit.ts';

// @ts-ignore
export const scripts: Map<string, unknown> = new Map([
  ['HeroScript', HeroScript],
  ['GameInterfaceScript', GameInterfaceScript],
  ['WorldScript', WorldScript],
  ['CameraScript', CameraScript],
  ['Level2Script', Level2Script],
]);
