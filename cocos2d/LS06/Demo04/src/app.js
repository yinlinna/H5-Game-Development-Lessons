
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var layer = new cc.LayerColor(cc.color.RED,200,200);
        layer.setAnchorPoint(0.5,0.5);
        layer.x=0;
        layer.y=size.height/2;
        this.layer = layer;
        this.addChild(layer);
        this.scheduleUpdate();
        this.schedule(this.myCallBack,0.2,cc.REPEAT_FOREVER,2);//定时器
        return true;
    },
    update:function (dt) {

        cc.log(dt);

        this.layer.x+=1;

    },
    myCallBack:function(dt){
        this.layer.x+=10;
        if(this.layer.x>400){
            this.unschedule(this.myCallBack);
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

