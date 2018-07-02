import {
  Graphics,
} from 'pixi.js'

import {
  vec2,
} from 'p2'

class Ship {

  velocity = vec2.create()
  direction = vec2.create()
  position = vec2.create()

  constructor({
    container,
    velocity = { x: 0, y: 0 },
    direction = { x: 0, y: 0 },
    position = { x: 0, y: 0 },
  }) {
    this.container = container

    this.position = position
    vec2.set(this.position, position.x, position.y)
    
    this.velocity = velocity
    vec2.set(this.velocity, velocity.x, velocity.y)
    
    this.direction = direction
    vec2.set(this.direction, direction.x, direction.y)

    this.createSprite()
  }

  rotate = (theta) => {
    
  }
  
  rotateToPoint = (point) => {
    // const angle = vec2.angle(point, this.direction)
    // vec2.rotate(this.direction, this.direction, this.position, angle)
  }

  applyThrust = (vec) => {
    
  }
  
  update = () => {
    // const 
  }

  createSprite = () => {
    const sprite = new Graphics()

    sprite.position.x = this.position.x
    sprite.position.y = this.position.y

    sprite.lineStyle(1, 0xeeeeee, 1)
    sprite.beginFill(0x000000, 0)
    sprite.moveTo(0, 2)
    sprite.lineTo(1, -1)
    sprite.lineTo(0, -0.5)
    sprite.lineTo(-1, -1)
    sprite.lineTo(0, 2)
    sprite.endFill()

    this.sprite = sprite
    this.container.addChild(this.sprite)
  }
}

export default Ship