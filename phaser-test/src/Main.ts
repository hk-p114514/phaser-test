import { Scene, Types } from 'phaser';

class Main extends Scene {
	constructor() {
		super('TEST GAME');
	}

	preload() {
		this.load.image('logo');
	}
}

export { Main };
