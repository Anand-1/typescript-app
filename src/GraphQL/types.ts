export type Character = {
  id: string;
  name: string;
  species: string;
  status: string;
  origin: {
    name: string;
  };
};

export type CharactersData = {
  characters: {
    results: Character[];
  };
};