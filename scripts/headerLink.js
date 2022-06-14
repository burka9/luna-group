import animation from './animation'

const { headerLink } = animation

const headerLinks = document.getElementById('header-links')
const links = [
	{ text: 'Home', route: '#' },
	{ text: 'About', route: '#' },
	{ text: 'Our brands', route: '#' },
	{ text: 'Contact', route: '#' },
]

const linkHover = document.getElementById('link-hover')


headerLinks.onmouseleave = () => headerLink.hover.leave(linkHover)

function populate() {
	headerLinks.replaceChildren(linkHover)
	for (const link of links) {
		let a = document.createElement('a')
		a.classList.add('link')
		a.innerHTML = link.text
		a.href = link.route
		a.onmouseenter = () => headerLink.hover.enter(linkHover, a)
		headerLinks.appendChild(a)
	}
}

populate()

export const component = headerLinks