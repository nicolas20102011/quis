class Form {
  constructor() {
    this.input=createInput=("").attribute("placeholder","introduce tu nombre");
    this.playButton=createButton=("jugar");
    this.titleImg=createImg("./assets/title.png","titulo del juego");
    this.greeting=createElement("h2");
    
  }

  setElementsposition(){
    this.titleImg.position(120,100);
    this.input.position(width/2-110,height/2-80);
    this.playButton.position(width/2-90,height/2-20);
    this.greeting.position(width/2-300,height/2-100);
  }
  handleMouseposition(){
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var message=` Hola ${this.input.value()}
       </br>Espera a que se una otro jugador...`;
       
    });
  }


  display(){
    this.setElementsposition();
    this.handleMousepressed();
  }



}
