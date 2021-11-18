import 'phaser';
import { Types } from 'phaser';
import { Game } from './Game';
import { Scenes } from './Scenes';

const config: Types.Core.GameConfig = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	parent: 'game',
	scene: Scenes,
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
