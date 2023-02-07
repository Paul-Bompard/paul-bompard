import { useTranslation } from 'next-i18next';
import { TableColumn } from '@/components/templates/TableEmphasis/TableEmphasis';

export type Set = string;

export type Description = {
  title: string;
  optionalList?: string[];
};
export type OptionalList = {
  label: string;
  set?: Set[];
};
export type AppetizerList = {
  key: string;
  title: string;
  description: Description;
};
export type Appetizer = {
  list: string[];
  columns: TableColumn[];
  listDetail: {
    [key: string]: AppetizerList;
  };
  optionalListDetail?: {
    [key: string]: OptionalList;
  };
};

interface AppetizerDataResponse {
  data: Appetizer;
  appetizerListKey: string[];
  columnsConfig: ReadonlyArray<TableColumn>;
}

export const useAppetizerData: () => AppetizerDataResponse = () => {
  const { t } = useTranslation('curriculumVitae');

  const data: Appetizer = t('appetizer', {
    returnObjects: true,
  });

  const { list, columns } = data;

  return {
    data,
    appetizerListKey: list,
    columnsConfig: columns,
  };
};
