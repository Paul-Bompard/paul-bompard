import { useState } from 'react';
import { Icon } from './IconInput/IconInput';
import {
  Container,
  IconContainer,
  InfoContainer,
  InputType,
  LinkCustom,
} from './InfoInput.styles';

export type InfoInputType = {
  type: InputType;
  value: string;
  link?: string;
};

export const InfoInput = ({ type, value, link }: InfoInputType) => {
  const [isHover, setIsHover] = useState(false);
  const rotationIcon = getRotationIcon(type);

  const inputBlock = (
    <Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      $rotation={getRotationContainer(type)}
    >
      <IconContainer
        style={{
          ...getStyleIcon(type),
          transform: isHover
            ? `rotate(${rotationIcon + 5}deg)`
            : `rotate(${rotationIcon}deg)`,
        }}
      >
        <Icon type={type} />
      </IconContainer>
      <InfoContainer $type={type}>{value}</InfoContainer>
    </Container>
  );

  return link !== undefined ? (
    <LinkCustom href={link} target={'_blank'} rel={'noopener noreferrer'}>
      {inputBlock}
    </LinkCustom>
  ) : (
    inputBlock
  );
};

const getRotationIcon = (type: InputType) => {
  switch (type) {
    case 'mail':
      return -16;
    case 'linkedin':
      return 6;
    case 'github':
      return 4;
    default:
      return 0;
  }
};

const getRotationContainer = (type: InputType) => {
  switch (type) {
    case 'mail':
      return 4;
    case 'phone':
      return 2;
    case 'linkedin':
      return -4;
    case 'github':
      return -4;
    default:
      return 0;
  }
};

const getStyleIcon = (type: InputType) => {
  switch (type) {
    case 'mail':
      return { width: '35px', height: '35px', marginRight: '-10px' };
    case 'phone':
      return { width: '42px', height: '42px', marginRight: '-10px' };
    default:
      return {};
  }
};
