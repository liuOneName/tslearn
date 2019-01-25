var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(name, width, height, color) {
        this.name = name;
        this.area = width * height;
        this.color = color;
    }
    Shape.prototype.shape = function () {
        console.log("super the name is " + this.name + " " + this.color + " " + this.area);
    };
    return Shape;
}());
var Shape3D = /** @class */ (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, width, height, color, length) {
        var _this = _super.call(this, name, width, height, color) || this;
        _this.volume = _this.area * length;
        return _this;
    }
    Shape3D.prototype.shape = function () {
        console.log("child the name is " + this.name + " " + this.area + " " + this.color + " " + this.volume);
    };
    Shape3D.prototype.shapeSuper = function () {
        _super.prototype.shape.call(this);
    };
    return Shape3D;
}(Shape));
var shape = new Shape('正方形', 10, 10, 'pink');
shape.shape();
var shape3D = new Shape3D('长方体', 10, 20, 'deepPink', 30);
shape3D.shape();
shape3D.shapeSuper();
