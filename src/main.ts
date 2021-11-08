import * as Phaser from 'phaser';

class Main extends Phaser.Game {
	constructor() {
		const config: Phaser.Types.Core.GameConfig = {
			type: Phaser.AUTO,
			width: 600, // 画面の横幅
			height: 400, // 画面の縦幅
			backgroundColor: '#000',
		};
		super(config);

		// ロード開始
		this.scene.start('Boot');
	}
}

window.onload = () => {
	const GameApp: Phaser.Game = new Main();
};
