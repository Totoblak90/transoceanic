import { Component } from '@angular/core';
import { AboutUsGridItems } from 'src/app/interfaces/grids.interface';
import { WhatWeDoGridItems } from '../../interfaces/grids.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  homeGridItems: AboutUsGridItems[] = [
    {
      info: `
        <p>
          Transoceanic Marine Services (TMS), es una empresa que nace hace más de una década en Miami, Estados Unidos.
        </p>
        <p>
          A lo largo de los años hemos invertido en recursos tecnológicos que nos posicionan como una de las empresas líderes en logística y abastecimiento.
          Esto nos ha permitido expandirnos y ofrecer nuestros servicios en América Latina y Europa.
        </p>

      `
    },
    {
      info: `
      <p>
        Impulsados por atención a los detalles, y gracias a las sólidas alianzas con nuestros proveedores alrededor del mundo,
        brindamos a nuestros clientes el mejor asesoramiento para sus negocios, adaptándonos a sus presupuestos sin alterar la calidad de las entregas.
      </p>
      <p>
        Ofreciendo una cobertura a nivel mundial, productos de primera línea, dedicada atención y precisión es que entendemos a TMS como la solución para cualquier empresa
      </p>
      `
    },
    {
      info: `
        <p>
          Motivados por la misma pasión del inicio, tenemos como objetivo hacernos propias las necesidades de los clientes para satisfacer,
          con nuestro servicio personalizado y fuerte compromiso, cada proyecto que nos confían.
        </p>
        <p>
          TMS tiene como meta ofrecer un rendimiento de primera clase, obteniendo la máxima eficiencia para todas las partes interesadas
        </p>
      `
    },
    {
      info: `<p>Nuestro equipo se encuentra disperso por el mundo, pero unido en los objetivos y valores.</p>`,
    },
  ]

}
