import fs from "fs";
import {Category, Category_JSON} from '../models/word.model';
import {dataPaths} from "../utils/paths";

export const getCategories = (): Category[] => {
  const path: string = dataPaths.categories;
  const categories: Category_JSON[] = JSON.parse(fs.readFileSync(path, "utf8"));

  return categories.map((category: Category_JSON) => {
    return {
      id: category.id,
      name: category.name
    };
  });
};

export const getCategoryById = (id: number) => {
  return getCategories().find(
    (category) => category.id === id
  );
};


