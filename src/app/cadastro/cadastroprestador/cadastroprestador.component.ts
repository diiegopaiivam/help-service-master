import { Component, OnInit } from '@angular/core';

interface Client{
  nome: string;
  sobrenome: string;
  identidade: string;
  cpf: string;
  nascimento: Date;
  email: string;
  rua: string;
  cidade: string;
  estado: string;
  phone1: string;
  phone2: string;
}


@Component({
  selector: 'app-cadastroprestador',
  templateUrl: './cadastroprestador.component.html',
  styleUrls: ['./cadastroprestador.component.css']
})
export class CadastroprestadorComponent implements OnInit {

  client: Client = {
    nome: "", sobrenome:"", identidade:"", cpf:"", nascimento: new Date(), email:"", rua:"",
    cidade:"", estado:"", phone1:"", phone2:""};

    states = ["SP","RJ","SC","RS","PR","CE","MG"];
    profis = ["Encanador","Eletrecista","Pintor","Montador","Marido de Aluguel"];
  constructor() { }

  ngOnInit() {
  }
  onSubimit(){
    console.log(this.client);
   }
}
