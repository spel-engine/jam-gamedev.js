import {
    AbstractScript,
    BoxCollider,
    CharacterController,
    Rigidbody,
    Sprite,
    Transform,
    Audio,
    Mesh,
    smoothstep,
    sub,
    greaterThan,
    saturate,
    float,
    color,
    Color,
    vec2,
    time,
    positionWorld,
    mix,
    vec4,
    normalize,
    vec3,
    Vector3,
    dot,
    uniform,
    positionLocal,
    mul,
    step,
    sin,
    add,
  } from '@spel/core';
  


  export class FloorScript extends AbstractScript {
    private mesh!: Mesh;


    public dissolveThreshold: any;
    override start(): void {
        console.log('floor script started')
        // Dissolve Shader Logic
        this.dissolveThreshold = uniform(0.5); // Threshold for dissolve
        const baseColor = uniform(vec3(0.0, 0.5, 1.0)); // Water base color
        const edgeColor = uniform(vec3(1.0, 0.5, 0.0)); // Edge glow color
    
        // Blob-like dissolve factor using sine wave and Y-axis position
        const blobEffect = sin(add(mul(positionLocal.y, float(5.0)), mul(time, float(2.0))));
        const dissolveFactor = step(this.dissolveThreshold, add(positionLocal.y, blobEffect));

        // Edge effect
        const edgeFactor = step(add(this.dissolveThreshold, float(-0.1)), add(positionLocal.y, blobEffect));

        // Final color
        const finalColor = mix(edgeColor, baseColor, dissolveFactor)
        
        // Apply to material
        this.mesh.instance.children[0].material.colorNode = vec4(finalColor, mul(dissolveFactor, edgeFactor));
        this.mesh.instance.children[0].material.transparent = true;
      }
    
      override update(): void {
        // Animate dissolve threshold
        // const dissolveThreshold = this.mesh.instance.children[0].material.uniforms.dissolveThreshold;
        this.dissolveThreshold.value = Math.abs(Math.sin(time.value * 0.5));
      }

  }
  