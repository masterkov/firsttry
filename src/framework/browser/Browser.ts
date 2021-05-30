export default class Browser {
  static openUrl(url) :void {
    browser.url(url);
  }

  static pressEnter() : void {
    browser.keys("\uE007");
  }

  static sendKey(key : string) : void {
    browser.keys(key);
  }
}
