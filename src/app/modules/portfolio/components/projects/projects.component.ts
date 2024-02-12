import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/project3.png',
      alt: 'Portfólio!',
      title: 'Note Vault',
      width: '100px',
      height: '51px',
      description: '<p> Meu portfólio foi desenvolvido em Angular, TypeScript, JavaScript, SCSS e HTML. Foi um grande desafio para colocar em prática tudo que aprendi em meus últimos cursos. Foi feito já na v17, todo responsivo para que tenha acessibilidade e possa ser usado em outros dispositivos! Foi utilizado também o consumo de API para criar o Dialog. Meu porftólio se fez necessário para apresentar meus conhecimentos, colocar a mostra meus projetos e direcionar minhas redes, para que eu possa ser encontrado! No botão irei deixar direcionado para o GitHub(reporsitório) do portfólio! </p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/WilliamMoro/my-portfolio'
        }
      ]
    },
    {
      src: 'assets/img/projects/projectbox.png',
      alt: 'Projeto Box Shadow, fazendo sombras descomplicadas!',
      title: 'Box Shadow',
      width: '100px',
      height: '51px',
      description: '<p> O projeto Box Shadow foi desenvolvido para diminuir o tempo que o programador front-end leva para criar sombras dos elementos (caixa), devido essa necessidade, aqui o usuário poderá de forma rápida, criar as sobras usando deslocamento horizontal e vertical, intensidade(blur) e o espalhamento(Spread). O usuário também poderá escolher a cor que deseja da sombra e a opacidade. Quando criamos uma sombra no css sem ao menos ter um preview é necessário ficar fazendo testes até chegar no que desejamos, com essa ferramenta em poucos cliques tem a sombra que deseja e basta clicar na caixa  que o código é copiado, então basta ir em seu css e colar! </p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://williammoro.github.io/Gerador_box_Shadow/'
        }
      ]
    },
    {
      src: 'assets/img/projects/project2.png',
      alt: 'NoteVoult, anotações do dia a dia!',
      title: 'Note Vault',
      width: '100px',
      height: '51px',
      description: '<p> O projeto Note Vault foi criado para uso próprio, utilizo para fazer minha lista de tarefas e consigo praticar meu JS. Aqui trabalhei utilizando localStorage para não perder os dados, ter alguns trabalhos de CRUD e simular dados vindos do back-end, onde consigo deletar,receber informações salvas, filtrar as tarefas por letra ou nome. Com isso consigo praticar receber os dados e apresentar na tela do usuário. </p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://williammoro.github.io/NoteVault_Todo/'
        }
      ]
    },
    {
      src: 'assets/img/projects/project2.png',
      alt: 'NoteVoult, anotações do dia a dia!',
      title: 'Note Vault',
      width: '100px',
      height: '51px',
      description: '<p> O projeto Note Vault foi criado para uso próprio, utilizo para fazer minha lista de tarefas e consigo praticar meu JS. Aqui trabalhei utilizando localStorage para não perder os dados, ter alguns trabalhos de CRUD e simular dados vindos do back-end, onde consigo deletar,receber informações salvas, filtrar as tarefas por letra ou nome. Com isso consigo praticar receber os dados e apresentar na tela do usuário. </p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://williammoro.github.io/NoteVault_Todo/'
        }
      ]
    },
    
    
 
  ]);
  
  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
