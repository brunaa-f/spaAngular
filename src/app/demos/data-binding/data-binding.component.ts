import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-data-binding",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./data-binding.component.html",
  styles: ``,
})
export class DataBindingComponent {
  public contadorClique: number = 1;
  public urlImagem: string = "https://www.cursou.com.br/wp-content/uploads/2018/07/Curso-de-Angular-2.png";
  public nome : string = "";

  adicionarClique(){
      this.contadorClique++
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  KeyUp(event: any){
    this.nome = event.target.value;
  }
}
