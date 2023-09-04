import {renderMenu} from './renderer'

const menu = [
  {
    "name": "Americano",
    "category": "pre-dinner",
    "picture": "americano.jpeg",
    "ingredients": "Campari - Vermouth Rosso - Selz.",
    "price": 12 
  },
  {
    "name": "Sbagliato",
    "category": "pre-dinner",
    "picture": "sbagliato.jpeg",
    "ingredients": "Campari - Vemouth Rosso - Prosecco",
    "price": 12
  }, 
  {
    "name": "Old fashion",
    "category": "after-dinner",
    "picture": "old Fashioned.jpeg",
    "ingredients": "Bourbon Whiskey - Angostura - Zucchero bianco",
    "price": 15 
  }
]

let filteredMenu = [...menu]

document.querySelector('#category-filter').addEventListener('change', (event) => {
  const categoriaSelezionata = event.target.value
  if ('' === categoriaSelezionata) {
   renderMenu(menu)
   return;
  }

  // Recuperare tutti gli elementi del menu che hanno come categoria categoriaSelezionata
  filteredMenu = menu.filter((cocktail)=> {
    return cocktail.category === categoriaSelezionata;
  })
  renderMenu(filteredMenu) 
})


export default menu
