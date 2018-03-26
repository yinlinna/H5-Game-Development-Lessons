var FirstLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;
        var spl = new cc.Sprite(res.Red_png);
        spl.x = 200;
        spl.y = 200;
        this.addChild(spl);
        var splone = new cc.Sprite(res.Yellow_png);
        splone.x = 300;
        splone.y = 300;
        this.addChild(splone);
        return true;
    }
});


var FirstScene = cc.Scene.extend({  //把层添加到场景上
    onEnter:function () {
        this._super();
        var layer = new FirstLayer();
        this.addChild(layer);
    }
});