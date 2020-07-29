class loginScene extends Scene{
    public constructor(){
        super();
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