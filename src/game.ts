import 'phaser';
import FirstScene from './scenes/FirstScene';


const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: [FirstScene]
};

const game = new Phaser.Game(config);
