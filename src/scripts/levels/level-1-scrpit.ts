import {
    AbstractScript,
    positionLocal,
    sin,
    Sprite,
    time,
    uniform,
    uv,
    vec2,
    vec3,
    vec4,
    tslFn,
    cloneDeep,
    Type,
    Interface,
  } from '@spel/core';
  
  // LEVEL 1
  // NAME: PROTOSOMETHING 1
  export class Level1Script extends AbstractScript {
    private interface!: Interface;

    override update(): void {
      if (this.input.getKeyDown('f') && this.interface.props.showDialog) {
        this.interface.props.dialog += 1;

        if (this.interface.props.dialog > 2) {
          this.interface.props.showDialog = false;
        }
      }
    }

    
    changeName() {
      this.interface.props.title = 'Coisas';
    }

    nextDialog() {
    }


  }
  