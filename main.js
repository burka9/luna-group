import './style.css'
import './scripts/headerLink'
import './scripts/animation'
import './scripts/cube'
import './scripts/burger-menu'
import './scripts/program'




const serviceList = document.getElementById('service-list')

const services = [
  {
    img: 'fresh-corner-1024x718.jpg',
    title: 'Fresh Corner',
    subtitle: 'Fresh Corner is a fresh and healthy food shop',
  },
  {
    img: 'kym-ellis-aF1NPSnDQLw-unsplash.jpg',
    title: 'Kym Ellis',
    subtitle: 'Kym Ellis is a fresh and healthy food shop',
  },
  {
    img: 'pexels-alejandro-barrón-96715.jpg',
    title: 'Alejandro Barrón',
    subtitle: 'Alejandro Barrón is a fresh and healthy food shop',
  },
  {
    img: 'flash-dantz-AlxJrnhfDsQ-unsplash.jpg',
    title: 'Flash Dantz',
    subtitle: 'Flash Dantz is a fresh and healthy food shop',
  },
  {
    img: '20191116_095431.jpg.gallery.jpg',
    title: 'Slaughterhouse',
    subtitle: 'Slaughterhouse is a fresh and healthy food shop'
  },
]

for (const service of services) {
  let item = document.createElement('div')
  item.classList.add('item')
  let pic = document.createElement('div')
  pic.classList.add('pic')
  pic.style.backgroundImage = `url(/imgs/${service.img})`
  let content = document.createElement('div')
  content.classList.add('content')
  let title = document.createElement('p')
  title.classList.add('title')
  let subtitle = document.createElement('p')
  subtitle.classList.add('subtitle')
  title.innerHTML = service.title
  subtitle.innerHTML = service.subtitle
  let more = document.createElement('div')
  more.classList.add('more')
  let button = document.createElement('button')
  button.innerHTML = 'More'
  more.appendChild(button)
  content.appendChild(title)
  content.appendChild(subtitle)
  content.appendChild(more)
  item.appendChild(pic)
  item.appendChild(content)
  serviceList.appendChild(item)
}
