
var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var layer1 = new cc.LayerColor(cc.color.RED,200,200);
        var layer2 = new cc.LayerColor(cc.color.YELLOW,200,200);

        layer1.ignoreAnchor=false;
        layer2.ignoreAnchor=false;
        layer1.setAnchorPoint(0.5,0.5);
        //layer1.setAnchorPoint(0,0);
        //layer1.setAnchorPosition(0,0);
        layer2.setAnchorPoint(1,1);

        layer1.setPosition(size.width/2,size.height/2);
        layer2.setPosition(size.width/2,size.height/2);

        //layer1.local(100,50);
        //layer2.world(200,100);
        layer1.rotation=45;
        layer2.rotation=45;

        this.addChild(layer1);
        this.addChild(layer2);

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

