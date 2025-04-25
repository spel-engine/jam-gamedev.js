import {
  Mesh,
  AbstractScript,
  Matrix4,
  Vector3,
  Quaternion,
  Entity,
} from '@spel/core';

export class Level2Script extends AbstractScript {

  private floor!: Entity;
  private wall!: Entity;
  private wallFrontal!: Entity;
  private exitDoor!: Entity;
  private door !: Entity;

  private color = "#cb4d68";
  private loaded = false;
  
  override async start() {
    this.floor = this.find('FloorPrototype') as Entity;
    this.wall = this.find('Wall') as Entity;
    this.wallFrontal = this.find('WallFrontal') as Entity;
    this.exitDoor = this.find('ExitDoor') as Entity;
    this.door = this.find('Door') as Entity;

    console.log('START', this.floor)
    await this.scene.instantiate(this.floor);
    await this.scene.instantiate(this.floor, { x: 2, y: 0, z: 0 });
    await this.scene.instantiate(this.floor, { x: 6, y: 0, z: 0 });
    await this.scene.instantiate(this.floor, { x: 8, y: 0, z: 0 });
    // 
    await this.scene.instantiate(this.wall, { x: 0, y: 2, z: -1 });
    await this.scene.instantiate(this.wall, { x: 2, y: 2, z: -1 });
    await this.scene.instantiate(this.wall, { x: 4, y: 2, z: -1 });
    await this.scene.instantiate(this.wall, { x: 6, y: 2, z: -1 });
    
    await this.scene.instantiate(this.exitDoor, { x: 8, y: 2, z: -1 });
    await this.scene.instantiate(this.door, { x: 7.6, y: 2, z: -1 });

    await this.scene.instantiate(this.wallFrontal,{ x: -0.9, y: 2, z:0 },);
    await this.scene.instantiate(this.wallFrontal,{ x: 8.9, y: 2, z:0 },);
  }
}

