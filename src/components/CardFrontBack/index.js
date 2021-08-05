import './styles.css'
import CardGame from '../CardGame'

function CardFrontBack() {
  window.cardFrontBack = {}
  window.cardFrontBack.handleClick = event => {
    const $origin = event.target
    const $cardFrontBack = $origin.closest('.card-front-back')

    $cardFrontBack.classList.toggle('-active')
  }

  return /*html*/ `
    <article class='card-front-back' onClick='cardFrontBack.handleClick(event)'>
      <div class='card -front'>
        ${CardGame()}
      </div>
      <div class='card -back'>
        ${CardGame('javascript', 'Logo do Javascript')}
      </div>
    </article>
  `
}

export default CardFrontBack
