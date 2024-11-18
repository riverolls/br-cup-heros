/** @format */

const { ccclass, property } = cc._decorator

export class IEvent {
  static GAME_READY = "game_ready"
  static GAME_END = "game_end"
  static CLICK_DOWNLOAD = "click_download"
}

export const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.polyverse.bricks.game&hl=en-us&gl=us"
export const appStoreUrl = "https://apps.apple.com/us/app/bricks-royale/id1636251208?l=en-us"

@ccclass
export default class ChannelManager extends cc.Component {
  protected onEnable(): void {
    this.node.parent.on(IEvent.GAME_READY, this.onGameReady.bind(this))
    this.node.parent.on(IEvent.GAME_END, this.onGameEnd.bind(this))
    this.node.parent.on(IEvent.CLICK_DOWNLOAD, this.onDownload.bind(this))
  }
  protected onDisable(): void {
    this.node.parent.off(IEvent.GAME_READY, this.onGameReady)
    this.node.parent.off(IEvent.GAME_END, this.onGameEnd)
    this.node.parent.off(IEvent.CLICK_DOWNLOAD, this.onDownload)
  }

  onGameReady() {
    try {
      console.log("game ready")
      // @ts-ignore
      window.gameReady && window.gameReady()
    } catch (error) {}
  }
  onGameEnd() {
    try {
      console.log("game end")
      // @ts-ignore
      window.gameEnd && window.gameEnd()
    } catch (error) {}
  }
  onDownload() {
    console.log("click download")
    // MTG 渠道
    ChannelMintegral.onDownload()
    // APP LOVIN 渠道
    ChannelAppLovin.onDownload()
    // unity
    ChannelUnity.onDownload()
    // TikTok
    ChannelTikTok.onDownload()
    // ironSource
    ChannelIronSource.onDownload()
  }
}

class ChannelUnity {
  static onDownload() {
    try {
      var userAgent = navigator.userAgent || navigator.vendor
      var url = appStoreUrl
      var android = googlePlayUrl
      if (/android/i.test(userAgent)) {
        url = android
      }
      // @ts-ignore
      mraid && mraid.open(url)
    } catch (err) {}
  }
}
class ChannelMintegral {
  static onDownload() {
    try {
      // @ts-ignore
      window.install && window.install()
    } catch (error) {}
  }
}
class ChannelAppLovin {
  static onDownload() {
    try {
      // @ts-ignore
      mraid && mraid.open?.call(this)
    } catch (error) {}
  }
}
class ChannelTikTok {
  static onDownload() {
    try {
      // @ts-ignore
      window.openAppStore && window.openAppStore()
    } catch (error) {}
  }
}
class ChannelIronSource {
  static onDownload() {
    try {
      // @ts-ignore
      dapi.openStoreUrl()
    } catch (error) {}
  }
}
