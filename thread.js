class thread{
    constructor(a,b){
      var friend={pointA:a,bodyB:b,stiffness:0.2,length:0}
        this.sling=Matter.Constraint.create(friend)
        Matter.World.add(world,this.sling)
    }
    display(){
   if(this.sling.bodyB!=null){
    var star=this.sling.pointA
   var star1=this.sling.bodyB.position
   stroke(0)
   line(star.x,star.y,star1.x,star1.y)}
    }
    release(){
        this.sling.bodyB=null
    }
}