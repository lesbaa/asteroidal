import {
  Application,
  Container,
} from 'pixi.js'

import {
  vec2,
} from 'p2'

import Ship from './classes/ship.class'

const view = document.querySelector('#c')

const app = new Application({
  width: window.innerWidth,
  height: window.innerHeight,
  view,
})

const camera = new Container()
app.stage.addChild(camera)

const state = {
  mouse: vec2.create(),
}


view.addEventListener('mousemove', ({ layerX, layerY }) => {
  state.mouseX = layerX
  state.mouseY = layerY
})

const ship = new Ship({
  container: camera,
  position: {
    x: app.screen.width / 2,
    y: app.screen.height / 2,
  },
  velocity: { x: 100, y: 100 },
  direction: { x: 100, y: 100 },
})

loop()

function loop(t) {

  const x = state.mouseX - ship.position.x
  const y = state.mouseY - ship.position.y

  vec2.set(state.mouse, x, y)

  const scaleX = state.mouseX / app.screen.width
  const scaleY = state.mouseX / app.screen.height
  
  // camera.x = (app.screen.width - camera.width) / 2
  // camera.y = (app.screen.height - camera.height) / 2

  camera.scale.x = scaleX
  camera.scale.y = scaleY

  ship.rotateToPoint(x, y)

  requestAnimationFrame(loop)
}