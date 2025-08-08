import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: false,
  templateUrl: './game.html',
  styleUrl: './game.scss'
})
export class Game {
  player1= 'Player 1';
  player2= 'Player 2';
  score = { wins: 0, losses: 0, ties: 0 };
  result = '';
  playerMoveImg = '../../../assets/heart-emoji.png';
  computerMoveImg = '../../../assets/heart-emoji.png';

  ngOnInit() {
    const savedScore = localStorage.getItem('game_score');
    if (savedScore) {
      this.score = JSON.parse(savedScore);
    }
  }

  play(playerMove: 'rock' | 'paper' | 'scissor') {
    const computerMove = this.getComputerMove();

    if (playerMove === computerMove) {
      this.result = "It's a tie!";
      this.score.ties++;
    } else if (
      (playerMove === 'rock' && computerMove === 'scissor') ||
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissor' && computerMove === 'paper')
    ) {
      this.result = 'You win!';
      this.score.wins++;
    } else {
      this.result = 'You lose!';
      this.score.losses++;
    }

    localStorage.setItem('game_score', JSON.stringify(this.score));

    this.playerMoveImg = `../../../assets/${playerMove}-emoji.png`;
    this.computerMoveImg = `../../../assets/${computerMove}-emoji.png`;
  }

  getComputerMove(): 'rock' | 'paper' | 'scissor' {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
      return 'rock';
    } else if (randomNumber < 2 / 3) {
      return 'paper';
    } else {
      return 'scissor';
    }
  }

  resetScore() {
    this.score = { wins: 0, losses: 0, ties: 0 };
    localStorage.removeItem('game_score');
  }
}
