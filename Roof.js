class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        
        World.add(world,this.body);
    }
    display(){
        push()
        var pos=this.body.position
        var angle=this.body.angle
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        
        rect(0,0,this.width,this.height);
        pop()
    }
}