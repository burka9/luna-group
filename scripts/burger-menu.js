import { component as headerLinks } from "./headerLink"
import animation from "./animation"

const burgerMenu = document.getElementById('burger-menu')

burgerMenu.onclick = () => animation.headerLink.height.toggle(headerLinks)