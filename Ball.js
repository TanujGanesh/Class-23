class Ball{
    constructor(x,y,radius){
       var prop={
           restitution : 1.0,
           friction : 1.0
       }
       this.body=Bodies.circle(x,y,radius,prop);
       this.radius=radius;
       World.add(world,this.body);     
    }
    display(){
        var f = this.body.position;
        ellipseMode(RADIUS);
        circle(f.x,f.y,this.radius);
    }
}