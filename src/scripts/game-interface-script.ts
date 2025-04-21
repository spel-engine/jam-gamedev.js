import { AbstractScript, Entity, Interface, Transform } from '@spel/core';
import { Camera, Type } from '../../../core/src/components/generic/components.ts';
import gsap from "gsap";
// LEVEL 1
// NAME: PROTOSOMETHING 1
export class GameInterfaceScript extends AbstractScript {
  private interface!: Interface;
  private showDialog = true;

  private cameraTransform!: Transform;

  override start(): void {
    const cameraEnt = this.find('MainCamera') as Entity;
    this.cameraTransform = cameraEnt.getComponent(Type.Transform) as Transform;

  }

  override update(): void {
    // if (this.input.getKeyDown('f') && this.interface.props.showDialog) {
    //   this.interface.props.dialog += 1;

    //   if (this.interface.props.dialog > 2) {
    //     this.interface.props.showDialog = false;
    //     // console.log(this.camera)
    //     // console.log(gsap)
    //     gsap.to(this.cameraTransform.position, {z: 7, duration: 2});
    //     gsap.to(this.cameraTransform.position, {y: 4, duration: 2});
    //     gsap.to(this.cameraTransform.rotation, {x: -10, duration: 2});
    //   }
    // }
  }

  
  changeName() {
    this.interface.props.title = 'Coisas';
  }

  nextDialog() {
  }


}
  