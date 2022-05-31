class Rectangle{
    constructor(width, height, color){
        this.width = width
        this.height = height
        this.color = color
    }
    perimeter(){

        return 2 * width+ height
    }
    area() {
        return width * this.height
    }
    description(){
        return `this is a ${this.color} rectangle ${this.width}cm width and ${this.height}cm height`
    }
}

let rectangle = new Rectangle(4,3, "black")
let rectangle1= new Rectangle (2, 6, "blue")

console.log(rectangle)
console.log(rectangle.area())
console.log(rectangle.description())
console.log(rectangle1)
console.log(rectangle1.description())