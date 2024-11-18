/** @format */

import { IEvent } from "./ChannelManager"

const { ccclass, property } = cc._decorator

@ccclass
export default class DownloadBtn extends cc.Component {
  @property(cc.VideoPlayer)
  video: cc.VideoPlayer = null
  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_END, this.onClick.bind(this))
    this.video.node.on("completed", this.onVideoEnd.bind(this))
  }
  onClick() {
    this.video.node.scaleX = 1
    this.video.play()
  }
  onVideoEnd() {
    console.log("视频播放结束")
    this.node.parent.parent.emit(IEvent.CLICK_DOWNLOAD)
    this.node.parent.parent.emit(IEvent.GAME_END)
  }
}
