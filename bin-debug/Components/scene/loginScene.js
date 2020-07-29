var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var loginScene = (function (_super) {
    __extends(loginScene, _super);
    function loginScene() {
        return _super.call(this) || this;
    }
    loginScene.prototype.onComplete = function () {
        egret.log("Login Scene Load Complete");
        this.createLoginUI();
    };
    loginScene.prototype.createLoginUI = function () {
        var login = new LoginUI();
        this.addChild(login);
    };
    return loginScene;
}(Scene));
__reflect(loginScene.prototype, "loginScene");
