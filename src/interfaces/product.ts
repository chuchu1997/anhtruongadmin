export interface productImages {
  id: string;
  path: string;
}
export interface CreateProductInterface {
  id?: string;
  title: string;
  description: string;
  categoryID: string;
  imagesObject?: productImages[];
  price: string;
  hashtag: Array<string>;
}
