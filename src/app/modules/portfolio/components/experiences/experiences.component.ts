import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.iterface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "SDR - Sales Developement Representative ",
        p:"CQL Advogados | Fev 2023 - Presencial"
      },
      text:"<p> Desde Fevereiro de 2023 atuo na empresa na função SDR, no qual fico responsável em fazer o primeiro contato com o lead, filtrando os casos, direcionando-os para o advogados responsáveis pelo seus casos e tornando a jornada do cliente mais interessante. Também assumo algumas responsabilidades de gestão dos pagamentos e a gestão dos leads.  </p>",
    },
    {
      summary: {
        strong: "Consultor Comercial",
        p:"Escola Prepara Cursos | 2022 / 2022"
      },
      text:"<p> Trabalhei como consultor na empresa, minha função era cuidar da parte estratégica comercial, agendamento e atendimentos de vendas. Devido a experiência com redes sociais, também ficava responsável em agregar valor para empresa através da gestão das redes.  </p>",
    },
    {
      summary: {
        strong: "Marketing e Gestão de Redes Sociais / Manutenção de Computadores e Incidentes Tecnológicos",
        p:"Supermercados Piovani | 2020 / 2021"
      },
      text:"<p> Na empresa varejista trabalhei voltado ao Marketing da empresa e em paralelo a parte da estrutura tecnológica do mercado! Recebia chamados de manutenção do caixa, manutenção dos programas utilizados de venda e estoque (CISS), atualização das máquinas da frente de caixa e manutenção em caso de algum incidente tecnológico. Também é interessante ressaltar a estrutura de rede entre os computadores e as filias. Não menos importante, cuidei da gestão de Marketing da rede, gerando engajamento e valor nas redes sociais além do Marketing interno e chão de loja. </p>",
    },
  ]);
}
