import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ICard } from '../../models/i-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  imports: [],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent implements OnInit {
  cardList: ICard[] = [];

  constructor(private _cardService: CardService, private _router: Router) {}

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this._cardService.getData().subscribe((res) => {
      this.cardList = res;
    });
  }

  showCardDetails(id: number) {
    this._router.navigate(['card-details', id]);
  }
}
