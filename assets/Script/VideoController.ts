import { IEvent } from "./ChannelManager";

cc.macro.ENABLE_TRANSPARENT_CANVAS = true
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

  @property(cc.Label)
  label: cc.Label = null;

  @property(cc.VideoPlayer)
  videoPlayer: cc.VideoPlayer = null

  @property(cc.Button)
  playBtn: cc.Button = null

  @property(cc.Button)
  downloadBtn: cc.Button = null

  @property(cc.Sprite)
  finger: cc.Sprite = null

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}
  onLandscape() {
    this.node.getComponent(cc.Canvas).designResolution = new cc.Size(1280, 720)
  }
  onPortrait() {
    this.node.getComponent(cc.Canvas).designResolution = new cc.Size(720, 1280)
  }

  start() {
    this.downloadBtn.node.active = false
    this.videoPlayer.node.on('completed', this.onPlayEnd, this)
    this.playBtn.node.on('click', this.onPlay, this)
    this.downloadBtn.node.on('click', this.onDownload, this)
    console.log('video controller start');
  }

  onDownload() {
    this.node.parent.emit(IEvent.CLICK_DOWNLOAD)
  }

  onPlayEnd() {
    console.log('on play end');
  }
  onPlay() {
    console.log('on play now');
    console.log('aaaxxxbb', this.videoPlayer);
    this.playBtn.node.active = false
    this.finger.node.active = false
    this.downloadBtn.node.active = true
    this.node.parent.emit(IEvent.GAME_END)
    this.videoPlayer.play()
  }

  // update (dt) {}
}

