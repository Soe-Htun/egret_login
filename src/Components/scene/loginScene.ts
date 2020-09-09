class loginScene extends eui.Component{
    public constructor(){
        super();
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onComplete, this);
    }
    protected onComplete(){
        egret.log("Login Scene Load Complete");
        this.createLoginUI();
    }
    createLoginUI(){
        let login: LoginUI=new LoginUI();
        this.addChild(login);
    }
}
