import { useState } from 'react';
import {
  InfoInput,
  InfoInputType,
} from '@/components/molecules/InfoInput/InfoInput';
import { LineWithAngle } from '../LineWithAngle/LineWithAngle';
import { Container } from './Info.styles';

interface InfoProps {
  position: 'top' | 'bottom';
  infos: InfoInputType[];
}

export const Info = ({ position, infos, ...rest }: InfoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isTop = position === 'top';

  return (
    <div {...rest}>
      <LineWithAngle
        angle={isTop ? 50 : -40}
        rotate={isTop ? -10 : 10}
        top={isTop ? -15 : 15}
        isAnimated={isHovered}
      />
      <Container
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {infos.map(({ type, value, link }) => (
          <InfoInput key={type} {...{ type, value, link }} />
        ))}
      </Container>
    </div>
  );
};
