import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'juego_dado';
  public valor1:number = 0;
  public valor2:number = 0;
  public valor3:number = 0;
  public resultados : string = "";
  public numeroAleatorio(): number{
    return Math.trunc(Math.random()*6+1);
  }
  constructor(){
    this.valor1=this.numeroAleatorio();
    this.valor2=this.numeroAleatorio();
    this.valor3=this.numeroAleatorio();
  }
  public tirar():void{
    this.valor1=this.numeroAleatorio();
    this.valor2=this.numeroAleatorio();
    this.valor3=this.numeroAleatorio();
    if (this.valor1==this.valor2 && this.valor1==this.valor3) {
      this.resultados='Gano';
    }else{
      this.resultados='Perdio';
    }
  }
}
