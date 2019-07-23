import { Component, OnInit } from '@angular/core';

interface Client{
  nome: string;
  sobrenome: string;
  identidade: string;
  cpf: string;
  nascimento: Date;
  email: string;
  senha: string;
  rua: string;
  cidade: string;
  estado: string;
  phone1: string;
  phone2: string;
}

@Component({
  selector: 'app-cadastrocliente',
  templateUrl: './cadastrocliente.component.html',
  styleUrls: ['./cadastrocliente.component.css']
})
export class CadastroclienteComponent implements OnInit {

  client: Client = {
    nome: "", sobrenome:"", identidade:"", cpf:"", nascimento: new Date(), email:"", senha:"", rua:"",
    cidade:"", estado:"", phone1:"", phone2:""};

    states = ["SP","RJ","SC","RS","PR","CE","MG"];
  constructor() { }

  ngOnInit() {
  }

  onSubimit(){
   console.log(this.client);
  }
  
}
