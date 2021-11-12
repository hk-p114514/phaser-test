/* src/scenes/preload.ts */

import * as p from 'phaser';

class Preload extends p.Scene {
	private startText?: p.GameObjects.Text; // 追加

	private bk_color: string = '0xe08734'; // 追加
	private fontStyle: p.Types.GameObjects.Text.TextStyle = {
		color: 'red',
		fontSize: '70px',
	}; //追加

	init() {
		console.log('Preloading');
	}

	preload() {
		console.log('Load things necessary for Game scene');
		// this.scene.start('game') // 削除
	}

	// ここから追加
	create() {
		this.cameras.main.setBackgroundColor(this.bk_color);
		this.startText = this.add.text(400, 300, 'START', this.fontStyle);

		this.startText.setOrigin(0.5);
	}
	// ここまで
}

export { Preload };
