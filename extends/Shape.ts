class Shape {
    area: number;
    color: string;
    constructor(public name: string, width: number, height: number, color: string){
        this.area = width * height;
        this.color = color;
    }
    shape(){
        console.log(`super the name is ${this.name} ${this.color} ${this.area}`);
    }
}

class Shape3D extends Shape {
    volume: number;
    constructor(name: string, width: number, height: number, color: string, length: number){
        super(name, width, height, color);
        this.volume = this.area * length;
    }
    shape(){
        console.log(`child the name is ${this.name} ${this.area} ${this.color} ${this.volume}`)
    }
    shapeSuper(){
        super.shape();
    }
}

let shape = new Shape('正方形', 10, 10, 'pink');
shape.shape();
let shape3D = new Shape3D('长方体', 10, 20, 'deepPink', 30);
shape3D.shape();
shape3D.shapeSuper();