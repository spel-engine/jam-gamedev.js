type Resources = {
  images: Map<string, string>;
  videos: Map<string, any>;
  models: Map<string, any>;
  shaders: Map<string, any>;
  audios: Map<string, string>;
  fonts: Array<string>;
};

export const resources: Resources = {
  images: new Map([
    ['character', 'character_sheet.png'],
    ['player', 'player.png'],
    ['witch', 'witch_idle.png'],
    // ['character', 'character.png'],
    ['idle', 'idle.png'],
    ['hero', 'hero.png'],
    ['waternormals', 'waternormals.jpg'],
    ['grass', 'grass-sprites.png'],
  ]),
  videos: new Map([]),
  audios: new Map([
    ['music', 'music.mp3'],
    ['footstepGrass', 'footstep-grass.mp3'],
    ['footstep', 'footstep.mp3'],
  ]),
  models: new Map([
    [
      'house',
      'city/building_A_withoutBase',
    ], [
      'bush',
      'city/watertower',
    ],
    [
      'build',
      'build/TallBuilding03-edit',
    ],
    [
      'hero',
      'hero/skeleton',
    ],
    [
      'stair',
      'stair/stair',
    ],
    [
      'floor',
      'dungeon/floor',
    ],
    [
      'wall',
      'dungeon/wall',
    ],
    [
      'shop',
      'shop/shop',
    ],
    [
      'block_1',
      'map/block_1',
    ],
    [
      'base',
      'city/base',
    ]
  ]),
  shaders: new Map([]),
  fonts: [
    'Comfortaa-Bold.ttf',
    'Comfortaa-Light.ttf',
    'Comfortaa-Medium.ttf',
    'Comfortaa-Regular.ttf',
    'Comfortaa-SemiBold.ttf',
    'Righteous-Regular.ttf',
  ],
};
