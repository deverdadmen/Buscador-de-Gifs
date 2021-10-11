import { Component, OnInit } from '@angular/core';

import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  get historial() {
    return this.gifsService.historial;
  }
  
  buscar( termino: string) {


    if( termino.trim().length === 0 ) {
      return;
    }

    this.gifsService.buscarGifs( termino );

  }
  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

}
