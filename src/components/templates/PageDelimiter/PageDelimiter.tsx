import { ReactNode } from 'react';
import { PageContainer } from '@/components/templates/PageDelimiter/PageDelimiter.styles';

interface PageDelimiterProps {
  children: ReactNode;
}

export const PageDelimiter = ({ children, ...rest }: PageDelimiterProps) => {
  return <PageContainer {...rest}>{children}</PageContainer>;
};
