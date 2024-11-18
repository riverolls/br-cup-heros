/** @format */

import { IEvent } from "./ChannelManager"
import DownloadBtn from "./DownloadBtn"
import Finger from "./Finger"
import Phone from "./Phone"

const { ccclass, property } = cc._decorator

@ccclass
export default class Main extends cc.Component {
  @property(cc.Canvas)
  canvas: cc.Canvas = null
  @property(DownloadBtn)
  downloadBtn: DownloadBtn = null
  @property(Finger)
  finger: Finger = null
  @property(Phone)
  phone: Phone = null

  _isLandscape: boolean = false
  _visibleSize: cc.Size = new cc.Size(720, 1280)

  protected onLoad(): void {
    this._onScreenChanged()
    cc.view.setResizeCallback(this._onScreenChanged.bind(this))
  }
  start() {
    this.node.parent.emit(IEvent.GAME_READY)
  }
  _onScreenChanged() {
    var rect = cc.game.canvas.getBoundingClientRect()

    this._visibleSize.width = rect.width
    this._visibleSize.height = rect.height
    // console.log("试图尺寸", this._visibleSize);
    if (rect.width > rect.height) {
      this._isLandscape = true
      this.canvas.designResolution = new cc.Size(1280, 720)
      // 横屏适配
      this._landscapeAdapter()
    } else {
      this.canvas.designResolution = new cc.Size(720, 1280)
      // 竖屏适配
      this._portraitAdapter()
    }
  }
  /** 横屏适配 */
  _landscapeAdapter() {
    this.phone.onLandscape()
    this.finger.onLandscape()
  }
  /** 竖屏适配 */
  _portraitAdapter() {
    this.phone.onPortrait()
    this.finger.onPortrait()
  }
}
