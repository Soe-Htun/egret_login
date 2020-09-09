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
var LoginUI = (function (_super) {
    __extends(LoginUI, _super);
    function LoginUI() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = "resource/ui_skins/Login/Login.exml";
        return _this;
    }
    LoginUI.prototype.onComplete = function () {
        this.initHandler();
    };
    LoginUI.prototype.initHandler = function () {
        this.showpwd.addEventListener(egret.TouchEvent.TOUCH_END, this.onShowPass, this);
        this.clear.addEventListener(egret.TouchEvent.TOUCH_END, this.onClear, this);
        this.login.addEventListener(egret.TouchEvent.TOUCH_END, this.onLogin, this);
    };
    LoginUI.prototype.onShowPass = function () {
        this.passwordId.displayAsPassword = this.showpwd.selected;
    };
    LoginUI.prototype.onLogin = function () {
        if (this.accountId.text === '12345' && this.passwordId.text === '1') {
            alert("ok");
        }
    };
    LoginUI.prototype.onClear = function () {
        this.accountId.text = '';
        this.passwordId.text = '';
    };
    return LoginUI;
}(eui.Component));
__reflect(LoginUI.prototype, "LoginUI");
