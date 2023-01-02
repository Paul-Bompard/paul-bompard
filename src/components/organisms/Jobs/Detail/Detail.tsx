import { Typography } from '@mui/material';
import { SeePicture } from '@/components/molecules/SeePicture/SeePicture';
import { Container, TitleContainer } from './Detail.styles';

export type Detail = {
  title: string;
  list: string[];
  optionalTitle?: string;
  optionalPicture?: string;
  optionalAlt?: string;
};

export const Detail = ({
  title,
  list,
  optionalTitle,
  optionalPicture,
  optionalAlt,
}: Detail) => {
  return (
    <Container $optionalText={optionalTitle}>
      <TitleContainer>
        <Typography style={{ textDecoration: 'underline' }}>{title}</Typography>
        {optionalPicture != null && (
          <SeePicture picture={optionalPicture} alt={optionalAlt} />
        )}
      </TitleContainer>
      <ul style={{ margin: 0 }}>
        {list.map((detail) => (
          <li key={detail}>
            <Typography>{detail}</Typography>
          </li>
        ))}
      </ul>
    </Container>
  );
};
