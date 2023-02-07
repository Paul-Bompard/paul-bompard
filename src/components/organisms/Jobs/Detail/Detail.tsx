import { Typography } from '@mui/material';
import { SeePicture } from '@/components/molecules/SeePicture/SeePicture';
import { Container, TitleContainer } from './Detail.styles';

export type Detail = {
  title: string;
  list: string[];
  optionalTitle?: string;
  optionalPicture?: string;
  index: number;
};

export const Detail = ({
  title,
  list,
  optionalTitle,
  optionalPicture,
  index,
}: Detail) => {
  return (
    <Container $optionalText={optionalTitle}>
      <TitleContainer>
        <Typography style={{ textDecoration: 'underline', fontWeight: 500 }}>
          {index}. {title}
        </Typography>
        {optionalPicture != null && <SeePicture picture={optionalPicture} />}
      </TitleContainer>
      <ul style={{ margin: 0 }}>
        {list.map((detail) => (
          <li key={detail} style={{ lineHeight: '30px' }}>
            <Typography style={{ lineHeight: '18px' }}>{detail}</Typography>
          </li>
        ))}
      </ul>
    </Container>
  );
};
