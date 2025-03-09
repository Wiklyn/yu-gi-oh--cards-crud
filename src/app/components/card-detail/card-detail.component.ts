import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-detail',
  imports: [CommonModule],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css',
})
export class CardDetailComponent implements OnInit {
  constructor(
    private _cardService: CardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  cardDetails: any;

  cardId: {
    id: number;
  } = { id: 0 };

  levelArray: string[] = [];

  ngOnInit(): void {
    this.cardId = {
      id: this._activatedRoute.snapshot.params['id'],
    };

    this._cardService.getDataById(this.cardId.id).subscribe((res) => {
      this.cardDetails = res;
    });

    this.levelArray = this._cardService.createLevelArray(
      this.cardDetails.level
    );
  }

  showUpdateForm(id: number) {
    this._router.navigate(['update-card', id]);
  }

  deleteCard(id: number) {
    this._cardService.deleteDataById(id).subscribe((res) => {
      this._router.navigateByUrl('card-list');
    });
  }
}
