import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import './src/styles/settings/colors.css'
import BoardGame from './src/objects/BoardGame'
import PlayerName from './src/components/PlayerName'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
  'beforeend',
  `
  ${PlayerName('Player 1')}
  ${PlayerName('Player 2')}
  ${BoardGame(6)}
  `,
)
