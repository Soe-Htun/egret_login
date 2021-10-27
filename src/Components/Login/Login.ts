class LoginUI extends eui.Component{
    private circleAni: egret.tween.TweenGroup
    private accountId:eui.EditableText;
    public passwordId:eui.EditableText;
    public showpwd:eui.CheckBox;
    private clear:eui.Button;
    private login:eui.Button;
    public constructor(){
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
        this.skinName ="resource/ui_skins/Login/Login.exml"
    }
    onComplete(){
        this.circleAni.play();
        this.initHandler();
    }
    private initHandler(){
        this.showpwd.addEventListener(egret.TouchEvent.TOUCH_END, this.onShowPass, this);
        this.clear.addEventListener(egret.TouchEvent.TOUCH_END, this.onClear, this);
        this.login.addEventListener(egret.TouchEvent.TOUCH_END, this.onLogin, this)
    }
    onShowPass(){
        this.passwordId.displayAsPassword=this.showpwd.selected;
    }
    onLogin(){
        
        if(this.accountId.text ==='12345' && this.passwordId.text==='1'){
            alert("ok");
        }
    }
    onClear(){
        this.accountId.text='';
        this.passwordId.text='';
    }
}