import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-home',
  standalone: true, // Adicione isso se for um componente independente
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ✅ Corrigido (plural)
})
export class HomeComponent { }

