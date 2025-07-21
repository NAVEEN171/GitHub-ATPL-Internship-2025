export interface SingleQuestion {
  name: string;
  question: string;
  answer: string;
  options: string[];
}

export type QuestionsType = Record<string, SingleQuestion[]>;
