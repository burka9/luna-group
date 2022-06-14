import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Flip)


const tl = gsap.timeline({
  duration: 1,
})


tl.fromTo('#logo-text', {
  y: -50,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
})






export default {
	headerLink: {
		hover: {
			enter: (target, source) => {
				gsap.to(target, { duration: 0.3, opacity: 1, ease: 'power2.out', left: source.offsetLeft, width: source.offsetWidth, })
			},
			leave: target => {
				gsap.to(target, { duration: 0.2, opacity: 0, ease: 'power2.out', })
			}
		},
		height: {
			toggle: target => {
				gsap.to(target, {
					duration: 0.35,
					height: target.offsetHeight === 0 ? 'auto' : 0,
					ease: 'power2.out',
				})
			}
		}
	}
}