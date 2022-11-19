export interface Characters {
  id: number;
  name: string;
  thumbnail: string;
}

export interface CharactersItem {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
