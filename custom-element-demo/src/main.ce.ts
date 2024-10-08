import { defineCustomElement } from 'vue'
import StarWarsPlanets from './components/star-wars-planets.ce.vue'
import StarWarsPerson from './components/star-wars-people.ce.vue'

const planetsCE = defineCustomElement(StarWarsPlanets)
const personCE = defineCustomElement(StarWarsPerson)

customElements.define('starwars-planets', planetsCE)
customElements.define('starwars-person', personCE)
