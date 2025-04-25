import {
    AbstractScript,
    BoxCollider,
    CharacterController,
    Rigidbody,
    Sprite,
    Transform,
    Audio,
    Vector3,
    Quaternion,
    Type,
    Entity
  } from '@spel/core';
  import gsap from "gsap";


  export class HeroScript extends AbstractScript {
    private sprite!: Sprite;
    private transform!: Transform;

    private characterController!: CharacterController;
    private rigidbody!: Rigidbody;
    private boxCollider!: BoxCollider;

    private audio!: Audio;
  
  

    private running: boolean = false;
    private runSpeed = 8;

    private jumpSpeed: number = 6;
    private jumpVelocity: number = 0;
    private doubleJump = true;

    private away: boolean = false;

    
    private exitReady: boolean = false;
    
    private cameraTransform!: Transform;
    
    private speed = 4;

    private activeColor: string = '';

    private currentLevel = 0;

    override start(): void {
      const cameraEnt = this.find('MainCamera') as Entity;
      this.cameraTransform = cameraEnt.getComponent(Type.Transform) as Transform;
      
      // this.characterController.instance.setApplyImpulsesToDynamicBodies(true);
      // this.rigidbody.instance.setLinearDamping(10);
      // this.rigidbody.instance.setAngularDamping(1);
    }
  
    override update(deltaTime?: any): void {
      if (this.input.getKeyPressed('shift')) {
        this.running = true;
        this.runSpeed = 3;
      } else {
        this.running = false;
        this.runSpeed = 0;
      }

      // console.log(this.transform.position.y)
      if (this.input.getKeyPressed('a')) {
        this.sprite.flipX = true;
        this.characterController.movementDirection.x = -(this.speed + this.runSpeed)  * deltaTime;
     } else if (this.input.getKeyPressed('d')) {
        this.sprite.flipX = false;
        this.characterController.movementDirection.x = (this.speed + this.runSpeed) * deltaTime;
      } else {
        this.characterController.movementDirection.x = 0;
      }

      gsap.to(this.cameraTransform.position, {x: this.transform.position.x, duration: .4});

      let doubleJumpUsed = false;

      if (this.input.getKeyDown(' ') ) {
        if (!this.characterController.grounded && this.doubleJump ) {
          this.jumpVelocity = 0.12;
          this.doubleJump = false;
          doubleJumpUsed = true;
        } else if (this.characterController.grounded) {
          this.jumpVelocity = this.running ? 0.12 + 0.03 : 0.12;
        }
      } 

      if (!this.characterController.grounded && !doubleJumpUsed) {
        // Apply gravity
        this.jumpVelocity -= (9.807 * deltaTime) / 20;
        gsap.to(this.cameraTransform.position, { y: this.transform.position.y + 1, duration: 1});
      }

      if (this.characterController.grounded) {
        this.doubleJump = true;
      }

      this.characterController.movementDirection.y = this.jumpVelocity;

      
      if (this.characterController.movementDirection.x !== 0 || this.characterController.movementDirection.z !== 0 ) {
        if (!this.audio.instance?.footstep.isPlaying) {
         this.audio.instance?.footstep.play()
        }
      } else {
        this.audio.instance?.footstep.stop()
      }

      // @ts-ignore
      this.intersectionsWith(this.boxCollider.instance, (other: Entity) => {
        console.log(other.name);
        if (other.name === 'Door') {
          this.exitReady = true;
          // other.visible = false;
          // this.entity.visible = false;
          // console.log('CAN INTERACT')
        }
      });
  
      if (this.input.getKeyDown('e') && this.exitReady) {
        console.log('EXIT');
        this.changeScene(`Level ${this.sceneManager.currentScene?.order! + 2}`)
      }

      this.colorControl();

      this.animations()
    }
  
    colorControl(): void {
      if (this.input.getKeyPressed('1')) {
        this.activeColor = 'red';
      } else if (this.input.getKeyPressed('2')) {
        this.activeColor = 'green';
      } else if (this.input.getKeyPressed('3')) {
        this.activeColor = 'green';
      } 
    }

    animations(): void {
      const { sequence } = this.sprite.animation!;

      if (this.input.getKeyPressed(' ') && !this.characterController.grounded){
        sequence.name = 'jump'; 
      } else if (this.input.getKeyPressed('d') && this.characterController.grounded){
        sequence.name = this.running ? 'run' : 'walk';
      } else if (this.input.getKeyPressed('a') && this.characterController.grounded) {
        sequence.name = this.running ? 'run' : 'walk';
      } else if (this.input.getKeyPressed('w')){
        sequence.name = 'climb'; 
      } else if (this.characterController.grounded) {
        sequence.name = 'idle';
      }
      
  
      if (this.input.getKeyUp('a')){
        sequence.name = 'idle';
      }
  
      if (this.input.getKeyUp('d')){
        sequence.name = 'idle';
      }
      
    }
  }
  