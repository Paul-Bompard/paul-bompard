import {
  InfoInput,
  InfoInputType,
} from '@/components/molecules/InfoInput/InfoInput';
import { LineWithAngle } from '../LineWithAngle/LineWithAngle';
import { Container } from './Info.styles';

interface InfoProps {
  position: 'top' | 'bottom';
  infos: InfoInputType[];
  animeLine: boolean;
  isHidingLine: boolean;
}

export const Info = ({
  position,
  infos,
  animeLine,
  isHidingLine,
  ...rest
}: InfoProps) => {
  const isTop = position === 'top';

  return (
    <div {...rest}>
      {isHidingLine ? null : (
        <LineWithAngle
          angle={isTop ? 50 : -40}
          rotate={isTop ? -10 : 10}
          top={isTop ? -15 : 15}
          isAnimated={animeLine}
        />
      )}
      <Container>
        {infos.map(({ type, value, link }) => (
          <InfoInput key={type} {...{ type, value, link }} />
        ))}
      </Container>
    </div>
  );
};
