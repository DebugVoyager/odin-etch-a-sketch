const body = document.body
const divContainer = document.createElement('div')
const button = document.createElement('button')
const footer = document.createElement('footer')
const my_link = document.createElement('a')

let gridCountPerSide = 16
let gridCountTotal = 256

body.append(button, divContainer, footer)
divContainer.setAttribute('class', 'grid-container')
button.setAttribute('class', 'btn')
button.textContent = 'Set grid count'
my_link.textContent = 'github.com/debugvoyager'
my_link.setAttribute('target', '_blank')
my_link.setAttribute('href', 'https://www.github.com/debugvoyager')
my_link.setAttribute('rel', 'noopener noreferrer')
footer.append(my_link)

function renderGrid(gridCountTotal) {
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild)
    }

    for (let i = 0; i < gridCountTotal; i++) {
        divContainer.appendChild(document.createElement('div'))
    }

    for (let child of divContainer.children) {
        child.setAttribute('class', 'grid')
        child.addEventListener('mouseover', (e) => child.style.backgroundColor = '#333333')
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