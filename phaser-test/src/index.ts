import { Scene, Types } from 'phaser';

class Main extends Scene {
	constructor() {
		super('TEST');
	}

	preload() {
		this.load.image('logo', '@/images/logo.png');
	}

	create() {
		const logo = this.add.image(400, 150, 'logo');
		this.tweens.add({
			targets: logo,
			y: 45,
			duration: 2000,
			ease: 'Power2',
			yoyo: true,
			loop: -1,
		});
	}
}

const config: Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'phaser-example',
	width: 800,
	height: 600,
	scene: Main,
};

window.onload = () => {
	const game = new Phaser.Game(config);
};
