export type TCat = {
  breeds: [];
  height: number;
  id: string;
  isClicked?: boolean;
  url: string;
  width: number;
}

export type TFavourite = {
  created_at: string;
  id: number
  image: {
    id: string,
    url: string
  }
  image_id: string;
  isClicked?: boolean;
  sub_id?: null;
  user_id: string;
}