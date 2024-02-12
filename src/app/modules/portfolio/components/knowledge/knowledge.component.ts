import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src:'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimentos de html5',
      href: '#',
    },
    {
      src:'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimentos de css3',
      href: '#',
    },
    {
      src:'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimentos de angular',
      href: '#',
    },
    {
      src:'assets/icons/knowledge/icons8-github.svg',
      alt: 'Ícone de conhecimentos de icons8-github',
      href: 'https://github.com/WilliamMoro',
    },
    {
      src:'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimentos de typescript',
      href: '#',
    },
    {
      src:'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimentos de javascript',
      href: '#',
    },
    {
      src:'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimentos de sass',
      href: '#',
    }
  ]);

  public openGitHub = () => {
    return
  }
}
