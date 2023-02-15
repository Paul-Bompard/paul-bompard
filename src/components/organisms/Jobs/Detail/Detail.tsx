import { Typography } from '@mui/material';
import { SeePicture } from '@/components/molecules/SeePicture/SeePicture';
import { Container, ListContainer, TitleContainer } from './Detail.styles';

export type Detail = {
  title: string;
  list: string[];
  optionalTitle?: string;
  optionalPicture?: string;
};

export const Detail = ({
  title,
  list,
  optionalTitle,
  optionalPicture,
}: Detail) => {
  return (
    <Container $optionalText={optionalTitle}>
      <TitleContainer>
        <Typography style={{ textDecoration: 'underline', fontWeight: 500 }}>
          {title}
        </Typography>
        {optionalPicture != null && <SeePicture picture={optionalPicture} />}
      </TitleContainer>
      <ListContainer>
        {list.map((detail) => (
          <li key={detail} style={{ lineHeight: '30px' }}>
            <Typography style={{ lineHeight: '18px' }}>{detail}</Typography>
          </li>
        ))}
      </ListContainer>
    </Container>
  );
};
