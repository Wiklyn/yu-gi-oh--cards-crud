import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-add-card',
  imports: [ReactiveFormsModule],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css',
})
export class AddCardComponent {
  addCardForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _cardService: CardService
  ) {
    this.addCardForm = this._formBuilder.group({
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

  onSubmit() {
    this._cardService.postData(this.addCardForm.value).subscribe((res) => {
      this._router.navigateByUrl('card-list');
    });
  }
}
