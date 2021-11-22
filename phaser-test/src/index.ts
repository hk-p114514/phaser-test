import 'phaser';
import { Game, Types } from 'phaser';
import { Main } from './Main';

const config: Types.Core.GameConfig = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	parent: 'game',
	scene: Main,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: false,
		},
	},
};

window.addEventListener('load', () => {
	const game = new Game(config);
});
