const body = document.body
const divContainer = document.createElement('div')
const button = document.createElement('button')
const footer = document.createElement('footer')
const myLink = document.createElement('a')

let gridCountPerSide = 16
let gridCountTotal = 256

body.append(button, divContainer, footer)
divContainer.setAttribute('class', 'grid-container')
button.setAttribute('class', 'btn')
button.textContent = 'Set grid count'
myLink.textContent = 'github.com/debugvoyager'
myLink.setAttribute('target', '_blank')
myLink.setAttribute('href', 'https://www.github.com/debugvoyager')
myLink.setAttribute('rel', 'noopener noreferrer')
footer.append(myLink)

function getRandomRGB() {
    return Math.floor(Math.random() * 256)
}

function renderGrid(gridCountTotal) {
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild)
    }

    for (let i = 0; i < gridCountTotal; i++) {
        divContainer.appendChild(document.createElement('div'))
    }

    for (let child of divContainer.children) {
        child.setAttribute('class', 'grid')
        child.addEventListener('mouseover', (e) => child.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`)
    }
}

button.addEventListener('click', () => {
        gridCountPerSide = +prompt('Enter a new grid count per side (e.g., 16 for a 16x16 grid):')
        gridCountTotal = gridCountPerSide * gridCountPerSide

        if (gridCountPerSide >= 1 && gridCountPerSide <= 100) {
            renderGrid(gridCountTotal)

            for (let child of divContainer.children) {
                child.style.flexBasis = `calc(100% / ${gridCountPerSide})`
            }
        }
})

renderGrid(gridCountTotal)