import {
    AbstractScript,
    Interface,
    Entity,
    Vector3,
  } from '@spel/core';
  
  // LEVEL 1
  // NAME: PROTOSOMETHING 1
  export class Level1Script extends AbstractScript {
    private interface!: Interface;
    private floor!: Entity;
    private wall!: Entity;
    private wallFrontal!: Entity;
    private exitDoor!: Entity;
    private door !: Entity;
    
    override async start() {
      this.floor = this.find('FloorPrototype') as Entity;
      this.wall = this.find('Wall') as Entity;
      this.wallFrontal = this.find('WallFrontal') as Entity;
      this.exitDoor = this.find('ExitDoor') as Entity;
      this.door = this.find('Door') as Entity;
  
      console.log('START', this.floor)
      await this.scene.instantiate(this.floor);
      await this.scene.instantiate(this.floor, new Vector3(2, 0, 0));
      await this.scene.instantiate(this.floor, new Vector3(4, 0, 0));
      await this.scene.instantiate(this.floor, new Vector3(6, 0, 0));
      await this.scene.instantiate(this.floor, new Vector3(8, 0, 0));
      // await this.scene.instantiate(this.floor, { x: 10, y: 0, z: 0 });

      await this.scene.instantiate(this.wall, new Vector3(0, 2, -1));
      await this.scene.instantiate(this.wall, new Vector3(2, 2, -1));
      await this.scene.instantiate(this.wall, new Vector3(4, 2, -1));
      await this.scene.instantiate(this.wall, new Vector3(6, 2, -1));
      // await this.scene.instantiate(this.wall, { x: 8, y: 2, z: -1 });
      
      await this.scene.instantiate(this.exitDoor, new Vector3(8, 2, -1));
      await this.scene.instantiate(this.door, new Vector3(7.6, 2, -1));
  
      await this.scene.instantiate(this.wallFrontal, new Vector3(-0.9, 2, 0));
      await this.scene.instantiate(this.wallFrontal, new Vector3(8.9, 2, 0));
  
    }

    override update(): void {
      // if (this.input.getKeyDown('f') && this.interface.props.showDialog) {
      //   this.interface.props.dialog += 1;

      //   if (this.interface.props.dialog > 2) {
      //     this.interface.props.showDialog = false;
      //   }
      // }

      
    }

    
    changeName() {
      this.interface.props.title = 'Coisas';
    }

    nextDialog() {
    }


  }
  