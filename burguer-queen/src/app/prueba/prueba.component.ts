import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

//Yael
import { ModalTableOrdenComponent } from '../modal-table-orden/modal-table-orden.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}



// @ts-ignore
/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-prueba',
  templateUrl: 'prueba.component.html',
  styleUrls: ['prueba.component.css'],
})
export class PruebaComponent implements OnInit {
  texto: string =  'SI';
  estadoPositivo = true;

  cambiaEstado() {
    if (this.estadoPositivo) {
      this.texto = (this.estadoPositivo) ?  'NO' : 'SI';
      this.estadoPositivo = !this.estadoPositivo;
      this.openModal();
    }

  }
  ngOnInit() {
  }


  tiles: Tile[] = [];


  //Yael
  constructor(public dialog: MatDialog){}
    openModal() {
      this.dialog.open(ModalTableOrdenComponent);
    }
  }

