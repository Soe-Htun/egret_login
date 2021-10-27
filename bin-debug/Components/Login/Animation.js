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
var Animation = (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        return _this;
    }
    Animation.prototype.onComplete = function () {
        this.circleAni.play();
        this.buttonTest.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
        this.closedialog.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeDialog, this);
    };
    Animation.prototype.onLogin = function () {
        // this.dialog.visible=true
        this.panel.visible = true;
    };
    Animation.prototype.closeDialog = function () {
        this.dialog.visible = false;
        this.parent.removeChild(this);
    };
    Animation.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Animation.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Animation;
}(eui.Component));
__reflect(Animation.prototype, "Animation", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Animation.js.map