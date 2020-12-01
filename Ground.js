class Ground{
    constructor(x,y,width,height){
        var prop={
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,width,height,prop);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var p=this.body.position;
        rectMode(CENTER);
        rect(p.x,p.y,this.width,this.height);
    }
}