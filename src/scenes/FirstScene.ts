import 'phaser'

export default class FirstScene extends Phaser.Scene {
    constructor() {
        super({key: 'FirstScene'});
    }
    create() {
        this.add.text(0,0, 'Created');
    }
}