class Animation extends eui.Component implements  eui.UIComponent {
	private buttonTest: eui.Button;
	private closedialog: eui.Button;
	private dialog: eui.Group;
	private panel: eui.Panel;
	private circleAni: egret.tween.TweenGroup

	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
	}
	onComplete() {
		this.circleAni.play()
		this.buttonTest.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
		this.closedialog.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeDialog, this)
		
	}
	onLogin() {
		// this.dialog.visible=true
		this.panel.visible = true
	}
	closeDialog() {
		this.dialog.visible = false;
		this.parent.removeChild(this)
	}
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}