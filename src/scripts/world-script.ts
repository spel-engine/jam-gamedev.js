import {
  Mesh,
  AbstractScript,
  mx_noise_float,
  dot,
  step,
  transformNormalToView,
  positionLocal,
  uniform,
  color,
  vec2,
  vec3,
  varying,
  Fn,
  float,
  Loop,
  cross,
  sign,
  Transform,
  Type,
  Matrix4,
  Vector3,
  Quaternion,
  Entity,
} from '@spel/core';

import { Pane } from 'tweakpane';

import { createNoise3D, createNoise2D } from 'simplex';
import alea from 'alea';

export class WorldScript extends AbstractScript {

  private floor!: Entity;
  private wall!: Entity;
  private wallFrontal!: Entity;
  private exitDoor!: Entity;
  private door !: Entity;

  
  private color = "#cb4d68";

  private loaded = false;
  
  // 1 - Floor/Wall
  // 2 - floor/wall/frontal
  // 3 - floor/door/frontal
  // 4 - floor/door/frontal
  // private map = {
  //   0: [1, 1, 1, 1, 1, 1, 1],
  //   1: []
  // }
  
  override async start() {
    
    this.floor = this.find('FloorPrototype') as Entity;
    this.wall = this.find('Wall') as Entity;
    this.wallFrontal = this.find('WallFrontal') as Entity;
    this.exitDoor = this.find('ExitDoor') as Entity;
    this.door = this.find('Door') as Entity;

    console.log('START', this.floor)
    await this.scene.instantiate(this.floor);
    await this.scene.instantiate(this.floor, { x: 2, y: 0, z: 0 });
    await this.scene.instantiate(this.floor, { x: 4, y: 0, z: 0 });
    await this.scene.instantiate(this.floor, { x: 6, y: 0, z: 0 });
    await this.scene.instantiate(this.floor, { x: 8, y: 0, z: 0 });
    await this.scene.instantiate(this.floor, { x: 10, y: 0, z: 0 });
    // await this.scene.instantiate(this.floor, { x: 12, y: 2, z: 0 });
    // 
    await this.scene.instantiate(this.wall, { x: 0, y: 2, z: -1 });
    await this.scene.instantiate(this.wall, { x: 2, y: 2, z: -1 });
    await this.scene.instantiate(this.wall, { x: 4, y: 2, z: -1 });
    await this.scene.instantiate(this.wall, { x: 6, y: 2, z: -1 });
    await this.scene.instantiate(this.wall, { x: 8, y: 2, z: -1 });
    
    await this.scene.instantiate(this.exitDoor, { x: 10, y: 2, z: -1 });
    await this.scene.instantiate(this.door, { x: 9.6, y: 2, z: -1 });

    await this.scene.instantiate(this.wallFrontal,{ x: -0.9, y: 2, z:0 },);
    await this.scene.instantiate(this.wallFrontal,{ x: 10.9, y: 2, z:0 },);


     
    // await this.scene.instantiate(this.wall, { x: 0, y: -0.2, z: 1 });
    // await this.scene.instantiate(this.wall, { x: 2, y: -0.2, z: 1 });
    // await this.scene.instantiate(this.wall, { x: 4, y: -0.2, z: 1 });
    // await this.scene.instantiate(this.wall, { x: 6, y: -0.2, z: 1 });
    // await this.scene.instantiate(this.wall, { x: 8, y: -0.2, z: 1 });
    // await this.scene.instantiate(this.wall, { x: 10, y: -0.2, z: 1 });
    // await this.scene.instantiate(this.wallFrontal,
    //   { x: -1.1, y: -0.2, z:0 },
    // );
    // await this.scene.instantiate(this.wallFrontal,
    //   { x: 11.1, y: -0.2, z: 0 },
    // );


    
    // await this.scene.instantiate(this.wall, { x: 10, y: 0, z: -1 });
    // await this.generatePlatform({ x: 0, y: 0, z: 0 })
    // this.scene.instantiate(this.wall)

    // console.log(this.cube)

    // const matrix = new Matrix4();

    // let l = 0;
    // let mx = 4;
    // let ac = (this.lines[l] * 2) + 2;

    // for (let x = 0; x < 20; x++) {

    //   if (ac === x ) {
    //     l += 1;
    //     ac = (this.lines[l] * 2) + 2;
    //   }
      
    //   this.generateMatrix(matrix)
    //   this.mesh.instance.setMatrixAt(x, matrix);
    // }
  }

  async generatePlatform(position: any) {
    await this.scene.instantiate(this.floor);
    // const transform = gameObject.components.get(Type.Transform) as Transform;
    // const mesh = gameObject.components.get(Type.Mesh) as Mesh;
    // transform.position.x = position.x;
    // transform.position.y = position.y;
    // transform.position.z = position.z;
  }

  // override async update() {
  //   if (!this.loaded) {
      
  //     await this.scene.instantiate(this.floor);

  //     this.loaded = true;
  //   }
  // }
  // override start(): void {


 

  //   const character = this.find('Hero');
  //   this.characterTranform = character.getComponent(Type.Transform);

  //   const noise3D = createNoise3D();
  //   this.mesh.instance.geometry.deleteAttribute( 'uv' );
  //   this.mesh.instance.geometry.deleteAttribute( 'normal' );
  //   // this.mesh.instance.material.wireframe = true;
  //   // this.mesh.instance.material.transparent = true;

  //   const params = {
  //     noiseIterations: 3,
  //     positionFrequency: 0.103
  //   }
     
  //   const leftPanel = document.getElementById('left') as HTMLDivElement;
  //   const pane = new Pane({
  //     title: 'World',
  //     container: leftPanel
  //   });
    
    
  //   pane.addBinding(params, 'noiseIterations');
  //   pane.addBinding(params, 'positionFrequency');

  //   const noiseIterations = uniform( params.noiseIterations );
  //   const positionFrequency = uniform( params.positionFrequency );
  //   const warpFrequency = uniform( 6 );
  //   const warpStrength = uniform( 1 );
  //   const strength = uniform( 10 );
  //   this.offset = uniform( vec2( 0, 0 ) );
  //   const normalLookUpShift = uniform( 0.01 );
  //   const colorSand = uniform( color( '#ffe894' ) );
  //   const colorGrass = uniform( color( '#85d534' ) );
  //   const colorSnow = uniform( color( '#ffffff' ) );
  //   const colorRock = uniform( color( '#bfbd8d' ) );

  //   pane.on('change', (ev) => {
  //     if (ev.target.key === 'noiseIterations') {
  //       noiseIterations.value = ev.value;
  //     } else if (ev.target.key === 'positionFrequency') {
  //       positionFrequency.value = ev.value;
  //     }
  //   });

   

  //   const vNormal = varying( vec3() );
  //   const vPosition = varying( vec3() );

  //   const terrainElevation = Fn( ( [ position ]: any ) => {

  //     const warpedPosition = position.add( this.offset ).toVar();
  //     warpedPosition.addAssign( mx_noise_float( warpedPosition.mul( positionFrequency ).mul( warpFrequency ), 1, 0 ).mul( warpStrength ) );

  //     const elevation = float( 0 ).toVar();
  //     Loop( { type: 'float', start: float( 1 ), end: noiseIterations.toFloat(), condition: '<=' }, ( { i }: any ) => {

  //       const noiseInput = warpedPosition.mul( positionFrequency ).mul( i.mul( 2 ) ).add( i.mul( 987 ) );
  //       const noise = mx_noise_float( noiseInput, 1, 0 ).div( i.add( 1 ).mul( 2 ) );
  //       elevation.addAssign( noise );

  //     } );

  //     const elevationSign = sign( elevation );
  //     elevation.assign( elevation.abs().pow( 2 ).mul( elevationSign ).mul( strength ) );

  //     return elevation;

  //   } );

  //   this.mesh.instance.material.positionNode = Fn( () => {

  //     // neighbours positions

  //     const neighbourA = positionLocal.xyz.add( vec3( normalLookUpShift, 0.0, 0.0 ) ).toVar();
  //     const neighbourB = positionLocal.xyz.add( vec3( 0.0, 0.0, normalLookUpShift.negate() ) ).toVar();

  //     // elevations

  //     const position = positionLocal.xyz.toVar();
  //     const elevation = terrainElevation( positionLocal.xz );
  //     position.y.addAssign( elevation );

  //     neighbourA.y.addAssign( terrainElevation( neighbourA.xz ) );
  //     neighbourB.y.addAssign( terrainElevation( neighbourB.xz ) );

  //     // compute normal

  //     const toA = neighbourA.sub( position ).normalize();
  //     const toB = neighbourB.sub( position ).normalize();
  //     vNormal.assign( cross( toA, toB ) );

  //     // varyings

  //     vPosition.assign( position.add( vec3( this.offset.x, 0, this.offset.y ) ) );

  //     return position;

  //   } )();

  //   this.mesh.instance.material.normalNode = transformNormalToView( vNormal );

  //   this.mesh.instance.material.colorNode = Fn( () => {

  //     const finalColor = colorSand.toVar();

  //     // grass

  //     const grassMix = step( - 0.06, vPosition.y );
  //     finalColor.assign( grassMix.mix( finalColor, colorGrass ) );

  //     // rock

  //     const rockMix = step( 0.5, dot( vNormal, vec3( 0, 1, 0 ) ) ).oneMinus().mul( step( - 0.06, vPosition.y ) );
  //     finalColor.assign( rockMix.mix( finalColor, colorRock ) );

  //     // snow

  //     const snowThreshold = mx_noise_float( vPosition.xz.mul( 25 ), 1, 0 ).mul( 0.1 ).add( 0.45 );
  //     const snowMix = step( snowThreshold, vPosition.y );
  //     finalColor.assign( snowMix.mix( finalColor, colorSnow ) );

  //     return finalColor;

  //   } )();
  // }

  // controls() {
  //   const leftPanel = document.getElementById('left') as HTMLDivElement;
  //   const pane = new Pane({
  //     title: 'Scene Manager',
  //     container: leftPanel
  //   });

  //   pane.addBinding(PARAMS, 'speed');
  // }
  
  // override update(): void {
    
  //   // console.log('hELLOR')
  //   // console.log(this.transform.position)
  //   this.mesh.instance.position.x = this.characterTranform.position.x;
  //   this.mesh.instance.position.z = this.characterTranform.position.z;
    
  //   this.offset.value.x = this.characterTranform.position.x;
  //   this.offset.value.y = this.characterTranform.position.z;
  // }
  generateMatrix(matrix: Matrix4) {
    const position = new Vector3();
    const quaternion = new Quaternion();
    const scale = new Vector3(1, 1, 1);

    position.x = -20;
    position.y = 0;
    position.z = 0;

    matrix.compose(position, quaternion, scale);
  }
}

