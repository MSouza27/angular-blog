
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit {
  fullText: string = "MAGNO BLOG";
  displayedText: string = "";
  index: number = 0;

  ngOnInit() {
    this.animateText();
  }

  animateText() {
    if (this.index < this.fullText.length) {
      this.displayedText += this.fullText[this.index];
      this.index++;
      setTimeout(() => this.animateText(), 150); // Tempo entre as letras
    }
  }
}

