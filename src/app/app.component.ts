import { Component } from '@angular/core';
import { Tarefa } from './app.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-Angular';

  nomeTarefa= null;
  
  tarefas= [
    new Tarefa('a'),
    new Tarefa('b')
  ];
  
  executadas=[];
  alterarTarefa: Tarefa = null;

  salvar() {
    if (this.alterarTarefa) {
      this.alterarTarefa.nomeTarefa = this.nomeTarefa;
    }
    else {
      const addTarefa = new Tarefa(this.nomeTarefa);
      this.tarefas.push(addTarefa);
    }
    this.nomeTarefa = null;
    this.alterarTarefa= null;
  }

  executada(tarefas){
    let indice = this.tarefas.indexOf(tarefas);
    this.executadas.push(tarefas);
    this.tarefas.splice(indice, 1);
  }

  editar(tarefas){
    this.nomeTarefa= tarefas.nomeTarefa;
    this.alterarTarefa= tarefas;
  }

  excluir(tarefas) {
    if (this.alterarTarefa == tarefas) {
      if (confirm('Deseja excluir? ')) {
        let indice = this.tarefas.indexOf(tarefas);
        this.tarefas.splice(indice, 1);
      } else {
        alert('Você não pode excluir enquanto estiver editando !!!')
      }
    }
  }

}
