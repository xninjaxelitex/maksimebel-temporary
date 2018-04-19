import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../presentation/presentation.service';
import { Image } from '../presentation/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgFolder: String = './assets/home/';
  images: Array<Image> = [];

  constructor(private presentService: PresentationService) { }

  ngOnInit() {
    this.images = [
      new Image('sofa_blue.jpg', 'INDIVIDUALISIERBARE MÖBEL', 'Sei dein eigener Designer'),
      new Image('shelf_blue.jpg', 'FARBEN IM INTERIOR DESIGN', 'Welche Farbe passt zu dir?'),
      new Image('shelf_brown.jpg', 'EICHE, BUCHE, NUSSBAUM, WENGE', 'Entdecken Sie die Vielfalt')
    ];

    this.presentService.setImages(this.images);
  }

}
