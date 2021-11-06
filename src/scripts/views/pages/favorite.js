import FavoriteRestoIdb from '../../data/favoriteresto-idb'
import { createRestoItemTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorited Restaurant</h2>
        <div id="restos" class="restos">
 
        </div>
      </div>
    `
  },

  async afterRender () {
    const restos = await FavoriteRestoIdb.getAllRestos()
    const restosContainer = document.querySelector('#restos')
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto)
    })
  }
}

export default Like
