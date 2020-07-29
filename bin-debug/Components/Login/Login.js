var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LoginUI = /** @class */ (function (_super) {
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
//# sourceMappingURL=Login.js.map