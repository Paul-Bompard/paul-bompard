import { Line } from './DashLine.styles';

interface DashLineProps {
  color?: string;
  angle?: number;
  origin?: string;
  width?: number;
  dashWidth?: number;
  isAnimated?: boolean;
}

export const DashLine = ({
  color = '#195fab',
  angle = 0,
  origin = 'center',
  width = 42,
  isAnimated = false,
}: DashLineProps) => {
  return (
    <Line
      $color={color}
      $angle={angle}
      $origin={origin}
      $width={width}
      $isAnimated={isAnimated}
    />
  );
};
