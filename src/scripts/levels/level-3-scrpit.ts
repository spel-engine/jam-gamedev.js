import {
  AbstractScript,
  Entity,
  Interface,
  Vector3 } from '@spel/core';

export class Level3Script extends AbstractScript {
  private interface!: Interface;

  private floor!: Entity;
  private floorRed!: Entity;
  private floorGreen!: Entity;
  private floorBlue!: Entity;

  private wall!: Entity;
  private wallFrontal!: Entity;
  private exitDoor!: Entity;
  private door !: Entity;

  private color = "#cb4d68";
  private loaded = false;
  
  private activeColor: string = '';


  private redFloors: Entity[]= [];
  private greenFloors: Entity[] = [];
  private blueFloors: Entity[] = [];

  override async start() {
    this.floor = this.find('FloorPrototype') as Entity;
    this.floorBlue = this.find('FloorBlue') as Entity;
    this.floorRed = this.find('FloorRed') as Entity;
    this.floorGreen = this.find('FloorGreen') as Entity;

    this.wall = this.find('Wall') as Entity;
    this.wallFrontal = this.find('WallFrontal') as Entity;
    this.exitDoor = this.find('ExitDoor') as Entity;
    this.door = this.find('Door') as Entity;

    console.log('START', this.floor)
    await this.scene.instantiate(this.floor);
    this.blueFloors.push(await this.scene.instantiate(this.floorBlue, new Vector3(2, 0, 0)));
    this.blueFloors.push(await this.scene.instantiate(this.floorBlue, new Vector3(4, 0, 0)));
    this.blueFloors.push(await this.scene.instantiate(this.floorBlue, new Vector3(6, 0, 0)));
    this.blueFloors.push(await this.scene.instantiate(this.floorBlue, new Vector3(8, 0, 0)));
    this.hide('blue');
    // await this.scene.instantiate(this.floorRed, { x: 4, y: 0, z: 0 });
    // await this.scene.instantiate(this.floorGreen, { x: 8, y: 0, z: 0 });
    await this.scene.instantiate(this.floor, { x: 10, y: 0, z: 0 });
    // await this.scene.instantiate(this.floor, { x: 12, y: 2, z: 0 });
    // 
    await this.scene.instantiate(this.wall, { x: 0, y: 2, z: -1 });
    await this.scene.instantiate(this.wall, { x: 2, y: 2, z: -1 });
    await this.scene.instantiate(this.wall, new Vector3(4, 2, -1));
    await this.scene.instantiate(this.wall, { x: 6, y: 2, z: -1 });
    await this.scene.instantiate(this.wall, { x: 8, y: 2, z: -1 });
    
    await this.scene.instantiate(this.exitDoor, new Vector3(10, 2, -1));
    await this.scene.instantiate(this.door, new Vector3(9.6, 2, -1));

    await this.scene.instantiate(this.wallFrontal, new Vector3(-0.9, 2, 0));
    await this.scene.instantiate(this.wallFrontal, new Vector3(10.9, 2, 0));
  }

  override update(): void {
    this.colorControl();
  }

  colorControl(): void {
    if (this.input.getKeyDown('1')) {
      this.hide('blue')
      this.hide('green')
      this.show('red')
    } else if (this.input.getKeyDown('2')) {
      this.hide('red')
      this.hide('blue')
      this.show('green')
    } else if (this.input.getKeyDown('3')) {
      this.hide('red')
      this.hide('green')
      this.show('blue')
    } 
  }

  show(name: string) {
    switch(name) {
      case 'blue': {
        this.blueFloors.forEach((item: Entity) => {
          item.visible = true;
        });
        break;
      }
    }
  }

  hide(name: string) {
    switch(name) {
      case 'blue': {
        this.blueFloors.forEach((item: Entity) => {
          item.visible = false;
        });
        break;
      }
    }
  }
}

