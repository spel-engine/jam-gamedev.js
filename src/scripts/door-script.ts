import {
    AbstractScript,
    BoxCollider,
    CharacterController,
    Rigidbody,
    Sprite,
    Transform,
    Audio,
  } from '@spel/core';
  


  export class DoorScript extends AbstractScript {
    private transform!: Transform;
    private boxCollider!: BoxCollider;

    private cutscene = [
      
    ]

    override update(): void {

      // console.log(this.boxCollider)
      // @ts-ignore
      // this.physicsWorld.contactPairsWith(this.boxCollider.collider, (other: Entity) => {
      //   console.log('INTERSECT')
      // });
  
      // this.characterController.instance.setApplyImpulsesToDynamicBodies(true);
      // this.rigidbody.instance.setLinearDamping(10);
      // this.rigidbody.instance.setAngularDamping(1);
    }

  }
  