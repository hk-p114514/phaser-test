import { Types } from 'phaser';
import { Scenes } from './scenes';

const config: Types.Core.GameConfig = {
	width: 360,
	height: 640,
	type: Phaser.AUTO,
	parent: 'game',
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		parent: 'game',
	},
	scene: Scenes,
};

class Game extends Phaser.Game {
	constructor(config: Types.Core.GameConfig) {
		super(config);
	}
}

window.addEventListener('load', () => {
	new Game(config);
});
