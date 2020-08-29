import { Component, OnInit } from '@angular/core';

import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss'],
})
export class ViewtaskComponent implements OnInit {
  public config: SwiperConfigInterface = {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // mousewheel: {
    //   invert: false,
    // },
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    },
  };
  constructor() {}
  public tasks = [
    {
      titulo: 'RoomMovie',
      fecha: '25 de Agosto',
      description: 'Quitar alert de add url',
    },
    {
      titulo: 'RoomMovie',
      fecha: '25 de Agosto',
      description: 'Implementar buscador medienta un pipe',
    },
    {
      titulo: 'RoomMovie',
      fecha: '25 de Agosto',
      description: 'Crear collecion en la api',
    },
    {
      titulo: 'RoomMovie',
      fecha: '25 de Agosto',
      description: 'Verificar si ya existe la pelicula',
    },
    {
      titulo: 'RoomMovie',
      fecha: '25 de Agosto',
      description: 'Agregar Buscador por año',
    },
    {
      titulo: 'RoomMovie',
      fecha: '25 de Agosto',
      description: 'Remover key de prueba del servicio',
    },
  ];

  ngOnInit(): void {}
}
