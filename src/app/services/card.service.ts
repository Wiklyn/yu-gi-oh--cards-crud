import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICard } from '../models/i-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  baseUrl: string = 'http://localhost:3000/CardList';
  currentData: ICard[] = [];

  constructor(private _httpClient: HttpClient) {}

  getData(): Observable<ICard[]> {
    return this._httpClient.get<ICard[]>(this.baseUrl);
  }

  postData(card: ICard): Observable<Object> {
    return this._httpClient.post(this.baseUrl, card);
  }

  getDataById(id: number) {
    return this._httpClient.get<ICard>(`${this.baseUrl}/${id}`);
  }

  putDataById(id: number, data: ICard) {
    return this._httpClient.put(`${this.baseUrl}/${id}`, data);
  }

  deleteDataById(id: number) {
    return this._httpClient.delete(`${this.baseUrl}/${id}`);
  }

  createLevelArray(level: number): string[] {
    return new Array(level).fill(
      'https://www.db.yugioh-card.com/yugiohdb/external/image/parts/icon_level.png'
    );
  }
}
