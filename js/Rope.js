class Rope{
    constructor(bodyA,pointB){
        var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.9,
        length : 250
        }
        this.pointB = pointB;
        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope);
}
    display(){
        if(this.rope.bodyA){
        var pointA= this.rope.bodyA.position
        var pointB = this.pointB
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        }



    }

}