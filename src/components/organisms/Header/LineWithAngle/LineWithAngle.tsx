import { DashLine } from '@/components/atoms/DashLine/DashLine';
import { Container } from './LineWithAngle.styles';

interface LineWithAngleProps {
  angle?: number;
  rotate?: number;
  isAnimated?: boolean;
  top?: number;
}

export const LineWithAngle = ({
  angle = 0,
  rotate = 0,
  isAnimated = false,
  top = 0,
}: LineWithAngleProps) => {
  return (
    <Container $rotate={rotate} $top={top}>
      <DashLine
        angle={-(angle / 2)}
        color={'#ffffff80'}
        origin={'right'}
        width={70}
        isAnimated={isAnimated}
      />
      <DashLine
        angle={angle / 2}
        color={'#ffffff80'}
        origin={'left'}
        width={80}
        isAnimated={isAnimated}
      />
    </Container>
  );
};
