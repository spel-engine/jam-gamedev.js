import {
    AbstractScript,
    BoxCollider,
    CharacterController,
    Rigidbody,
    Sprite,
    Transform,
    Audio,
  } from '@spel/core';
  


  export class CameraScript extends AbstractScript {
    private transform!: Transform;

    private cutscene = [
      
    ]
    override start(): void {
      // this.characterController.instance.setApplyImpulsesToDynamicBodies(true);
      // this.rigidbody.instance.setLinearDamping(10);
      // this.rigidbody.instance.setAngularDamping(1);
    }

  }
  