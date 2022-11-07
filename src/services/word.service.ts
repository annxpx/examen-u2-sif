import fs from "fs";
import {Word, Word_JSON} from '../models/word.model';
import {dataPaths} from "../utils/paths";
import {getCategoryById} from "../services/category.service";
import { s_word, s_word_JSON } from "../models/attempt.model";
import { AutoIncrement } from "sequelize-typescript";

export const getWords = (): Word[] => {
  const wordsJson: Word_JSON[] = getWordsJSON();

  return wordsJson.map((word: Word_JSON) => {
    return {
      id: word.id,
      word: word.word,
      category: getCategoryById(word.categoryId) || { id: 0, name: "Unknown" },
    };
  });
};

export const getJustWords = (): s_word[] => {
  const wordsJson: s_word_JSON[] = getWordsJSON();

  return wordsJson.map((word: s_word_JSON) => {
    return {
      word: word.word
    };
  });
};

export const getWordById = (id: number): Word | undefined => {
  return getWords().find(
    (word) => word.id === id
  );
};

export const insertWord = (word: Word_JSON): void => {
  let id= AutoIncrement;
  id : word.id;
  const path: string = dataPaths.words;
  const words: Word_JSON[] = getWordsJSON();

  words.push(word);

  fs.writeFileSync(path, JSON.stringify(words), { encoding: "utf-8", flag: "w+" });
};

// To use in this file only:
const getWordsJSON = (): Word_JSON[] => {
  const path: string = dataPaths.words;
  return JSON.parse(fs.readFileSync(path, "utf8"));
};
