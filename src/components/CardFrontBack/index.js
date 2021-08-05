import './styles.css'
import CardGame from '../CardGame'

function CardFrontBack() {
  return /*html*/ `
    <article class='card-front-back'>
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
