var SecondLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;
        var bg = new cc.Sprite(res.Bg);
        bg.x = size.width/2;
        bg.y = size.height/2;
        this.addChild(bg);

        var fly = new cc.Sprite(res.Fly_png);
        fly.x = size.width/2;
        fly.y = size.height/2;
        this.addChild(fly);
        return true;
    }
});


var SecondScene = cc.Scene.extend({  //把层添加到场景上
    onEnter:function () {
        this._super();
        var layer = new SecondLayer();
        this.addChild(layer);
    }
});