/** @format */

import { appStoreUrl } from "./ChannelManager"

const { ccclass, property } = cc._decorator

@ccclass
export default class Phone extends cc.Component {
  _widget: cc.Widget = null
  onLandscape() {
    this.node.setPosition(-280, 0)
    this.node.setScale(0.7, 0.7)
  }
  onPortrait() {
    this.node.setPosition(0, 131)
    this.node.setScale(1, 1)
  }
}
