const removingH1 = document.querySelector("h1")
const body = document.querySelector("body")
removingH1.remove()

const hElement = document.createElement("h1")
hElement.append("Webpage Recreation Practice")
body.append(hElement)

const pElement = document.createElement("p")
pElement.append("The HTML of this webpage was created with JavaScript.")
body.append(pElement)

const imgElement = document.createElement("img")
imgElement.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900")
body.append(imgElement)

const h1Element = document.createElement("h1")
h1Element.append("Facts about the Multicolored Tanager")
body.append(h1Element)

const ulElement = document.createElement("ul")
ulElement.setAttribute("id", "iceCream")
body.append(ulElement)

const linOne = document.createElement("li")
const linTwo = document.createElement("li")
linOne.append("It is endemic to the mountains of Colombia.")
linTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.")
ulElement.append(linOne, linTwo)

const h2Element = document.createElement("h2")
h2Element.append("Source")
body.append(h2Element)

const aElement = document.createElement("a")
aElement.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager")
aElement.textContent = "WIKI"
body.append(aElement)


