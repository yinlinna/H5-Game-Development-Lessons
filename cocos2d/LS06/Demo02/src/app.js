
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var Label1 = new cc.LayerColor(cc.color.YELLOW,200,200);
        Label1.ignoreAnchor = false;
        Label1.x = size.width / 2-300;
        Label1.y = size.height / 2;

        this.addChild(Label1);

        var Label2 = new cc.LayerColor(cc.color.RED,200,200);
        Label2.ignoreAnchor = false;
        Label2.x = size.width / 2;
        Label2.y = size.height / 2;
        this.addChild(Label2);

        var Label3 = new cc.LayerColor(cc.color.GREEN,200,200);
        Label3.ignoreAnchor = false;
        Label3.x = size.width / 2+300;
        Label3.y = size.height / 2;
        this.addChild(Label3);


        return true;

    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

