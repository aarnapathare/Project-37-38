class Trump {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      this.image = loadImage("trump.png")
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed<3){

        push()

      translate(this.body.position.x, this.body.position.y)
     rotate(this.body.angle)
     rectMode(CENTER)
image(this.image, 0, 0, this.width, this.height)
this.Visiblity 
     tint(255,this.Visiblity);
pop()

      }

      else{

        World.remove(world, this.body);
        
        push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();

      }
      
      push()
      translate(this.body.position.x, this.body.position.y)
     rotate(this.body.angle)
     rectMode(CENTER)
rect(0, 0, this.width, this.height)
this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
pop()


    
  }
  
  score(){
   if(this.visiblity< 0 && this.visiblity>105){
  score++
    }
  }
  
}
       
      

  
 