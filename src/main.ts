import * as Phaser from 'phaser';
import { Preload } from './Preload';

class Main extends Phaser.Game {
	constructor() {
		const config: Phaser.Types.Core.GameConfig = {
			type: Phaser.AUTO,
			width: 600, // 画面の横幅
			height: 400, // 画面の縦幅
			backgroundColor: '#aaa',
		};
		super(config);

		// シーンにキーを割り振る
		this.scene.add('preload', Preload, false);

		// ロード開始
		this.scene.start('Boot');
	}
}

window.onload = () => {
	const GameApp: Phaser.Game = new Main();
};
