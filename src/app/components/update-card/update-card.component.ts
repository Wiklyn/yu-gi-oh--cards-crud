import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-update-card',
  imports: [ReactiveFormsModule],
  templateUrl: './update-card.component.html',
  styleUrl: './update-card.component.css',
})
export class UpdateCardComponent {
  updateCardForm: FormGroup;

  cardDetails: any;

  cardId: {
    id: number;
  } = { id: 0 };

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _cardService: CardService
  ) {
    this.updateCardForm = this._formBuilder.group({
      name: [''],
      attribute: [''],
      image: [''],
      attributeImage: [''],
      level: [''],
      type: [''],
      cardDescription: [''],
      atk: [''],
      def: [''],
    });
  }

  ngOnInit(): void {
    this.cardId = {
      id: this._activatedRoute.snapshot.params['id'],
    };

    this._cardService.getDataById(this.cardId.id).subscribe((res) => {
      this.updateCardForm.setValue({
        name: res.name,
        attribute: res.attribute,
        image: res.image,
        attributeImage: res.attributeImage,
        level: res.level,
        type: res.type,
        cardDescription: res.cardDescription,
        atk: res.atk,
        def: res.def,
      });
    });
  }

  onSubmit() {
    this._cardService
      .putDataById(this.cardId.id, this.updateCardForm.value)
      .subscribe((res) => {
        this._router.navigateByUrl('card-list');
      });
  }
}
