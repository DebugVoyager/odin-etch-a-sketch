// Commit early and often!!!

const body = document.body
const divContainer = document.createElement('div')

body.appendChild(divContainer)
divContainer.setAttribute('class', 'grid-container')

for (let i = 0; i < 256; i++) {
    divContainer.appendChild(document.createElement('div'))
}

for (let child of divContainer.children) {
    child.setAttribute('class', 'grid')
}