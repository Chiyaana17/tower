class box {
    constructor (x,y,w,h){
    this.width=w;
    this.height=h;
    this.t=255
    this.img=loadImage("box.PNG")
    var properties={
        friction:1
    }
    this.body=Matter.Bodies.rectangle(x,y,this.width,this.height,properties)
    Matter.World.add(world,this.body)
    }
    display(){
        push()
    rectMode(CENTER)
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
        if (this.body.speed<5){
     var star =this.body.position
rect(0,0,this.width,this.height)
}
else{
   console.log(this.t)
    Matter.World.remove(world,this.body)
    tint(255,this.t)
    imageMode(CENTER)
    image(this.img,0,0,this.width,this.height)
    this.t=this.t-5
}
pop()
}
}