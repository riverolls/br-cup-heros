/** @format */

const { ccclass } = cc._decorator

@ccclass
export default class Finger extends cc.Component {
  startAnim() {
    let originPosY = this.node.y
    const d = 32

    cc.tween(this.node)
      .repeatForever(
        cc
          .tween(this.node)
          .to(0.6, { y: originPosY + d })
          .to(0.6, { y: originPosY })
      )
      .start()
  }

  onPortrait() {
    this.node.setPosition(220, -470)
    this.node.setScale(1, 1)
    this.startAnim()
  }
  onLandscape() {
    this.node.setScale(0.7, 0.7)
    this.node.setPosition(135, -270)
    this.startAnim()
  }
}
