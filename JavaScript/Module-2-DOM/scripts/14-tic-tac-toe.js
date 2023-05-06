let player1 = ''
let player2 = ''
let current_player = ''
let win_situations = [['1','2','3'], ['4','5','6'], ['7','8','9'], ['1','4','7'], ['2','5','8'], ['3','6','9'], ['1','5','9'], ['3','5','7']]
let boardX = []
let boardO = []
const turn = document.querySelector('.turn')
const player_to_play = document.querySelector('.player_to_play')

function checkWin(playerBoard) {
    for (let i = 0; i < win_situations.length; i++) {
      let count = 0
      for (let j = 0; j < win_situations[i].length; j++) {
        if (playerBoard.includes(win_situations[i][j])) {
          count++
        }
      }
      if (count === win_situations[i].length) {
        return true
      }
    }
    return false
}

function restart_game() {
    player1 = ''
    player2 = ''
    current_player = ''
    boardX = []
    boardO = []
    document.querySelector('.names').style.display = 'flex'
    document.querySelector('#name1').value = ''
    document.querySelector('#name2').value = ''
    turn.style.display = 'none'
    document.querySelectorAll('.cell span').forEach(function(span) {
        span.classList.remove('X', 'O')
        span.classList.add('initial')
    })
    turn.classList.remove('uppercase')
    turn.innerHTML = 'Player <span class="player_to_play">' + current_player + '</span> turn'
}

document.querySelector('#register_names').addEventListener('click', function() {
    player1 = document.querySelector('#name1').value
    player2 = document.querySelector('#name2').value
    
    if (player1 === '' || player2 === '') {
        document.querySelector('#register_names').style.backgroundColor = 'red'
    } else {
        current_player = player1
        player_to_play.textContent = current_player
        document.querySelector('.names').style.display = 'none'
        turn.style.display = 'block'
    }
})

document.querySelectorAll('.cell').forEach(function(cell) {
    cell.addEventListener('click', function() {
        const span = cell.children[0]
        const position = span.dataset.position
        if (current_player === player1 && player1 !== '' && span.classList.value === 'initial') {
            boardX.push(position)
            span.classList.add('X')
            span.classList.remove('O')
            span.classList.remove('initial')
            current_player = player2
            turn.innerHTML = 'Player <span class="player_to_play">' + current_player + '</span> turn'
            if (checkWin(boardX)) {
                turn.innerHTML = 'PLAYER <span class="player_to_play">' + current_player + '</span> WON!'
                turn.classList.add('uppercase')
            }
        } 
        else if (current_player === player2 && player2 !== '' && span.classList.value === 'initial') {
            boardO.push(position)
            span.classList.add('O')
            span.classList.remove('X')
            span.classList.remove('initial')
            current_player = player1
            turn.innerHTML = 'Player <span class="player_to_play">' + current_player + '</span> turn'
            if (checkWin(boardO)) {
                turn.innerHTML = 'PLAYER <span class="player_to_play">' + current_player + '</span> WON!'
                turn.classList.add('uppercase')
            }
        }
    })
})

document.querySelector('.restart').addEventListener('click', restart_game)