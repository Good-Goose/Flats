enum enumSorting {
  DEFAULT = "DEFAULT",
  ASC = "ASC",
  DESC = "DESC",
}

export interface ITypeSorting {
  name: string;
  type: enumSorting;
}

export const typeSortings: ITypeSorting[] = [
  { name: "По умолчанию", type: enumSorting.DEFAULT },
  { name: "По возрастанию", type: enumSorting.ASC },
  { name: "По убыванию", type: enumSorting.DESC },
];
