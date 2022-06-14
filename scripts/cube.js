import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const faces = [ 'front', 'back', 'left', 'right', 'top', 'bottom' ]
const cube = document.getElementById('cube')

for (const face of faces) {
  let faceEl = document.createElement('div')
  faceEl.classList.add('cube-face')
  faceEl.id = face
  cube.appendChild(faceEl)
}

gsap.to(cube, {
  scrollTrigger: {
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 2,
  },
  duration: 5,
  rotationX: 360,
  rotationY: 360,
  ease: 'linear',
})