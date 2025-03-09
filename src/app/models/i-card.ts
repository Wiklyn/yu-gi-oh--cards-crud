export interface ICard {
  id: number;
  name: string;
  attribute: string;
  attributeImage: string;
  level: number;
  image: string;
  type: string;
  cardDescription: string;
  atk: number;
  def: number;
  setCode?: string;
}
