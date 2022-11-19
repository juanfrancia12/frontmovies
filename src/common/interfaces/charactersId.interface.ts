export interface Character {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
}

export interface CharacterItem {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
