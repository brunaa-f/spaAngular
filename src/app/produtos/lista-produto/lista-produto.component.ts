import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-lista-produto',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './lista-produto.component.html',
  providers : [ProdutoService]
})
export class ListaProdutoComponent implements OnInit{

  constructor(private produtoService: ProdutoService){

  }

  public produtos!: Produto[];

  ngOnInit(): void {
    this.produtoService.obterProdutos()
    .subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos)
      },
      error => console.log(error)
    );
  }
}