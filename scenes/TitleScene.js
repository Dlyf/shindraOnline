class TitleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TitleScene'});
        }
        preload () {
            console.log("hello");
        }

        create () {
            let title_text = this.add.text(100, 100, 'PHaser RPG');
        }
}
export default TitleScene;