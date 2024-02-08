import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  gifs: any = {};
  searchValue: string = "";

  constructor(private gifService: GifService) { }

  ngOnInit(): void {
    this.getTrendyGif();
  }

  getTrendyGif() {
    this.gifService.getTrendyGif().subscribe(gifs => {
      this.gifs = gifs;
    });
  }

  searchGif(): void {

    if (this.searchValue != "") {
      setTimeout(() => {
        this.gifService.getGif(this.searchValue).subscribe(gifs => {
          this.gifs = gifs;
        });
      }, 3000)
    } else {
      this.getTrendyGif();
    }

  }

}
