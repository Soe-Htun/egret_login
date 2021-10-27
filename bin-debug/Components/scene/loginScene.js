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
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        return _this;
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
}(eui.Component));
__reflect(loginScene.prototype, "loginScene");
//# sourceMappingURL=loginScene.js.map