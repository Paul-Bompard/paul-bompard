import {
  CloseButton,
  Container,
  DialogContainer,
} from '@/components/atoms/PictureDialog/PictureDialog.styles';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage/ResponsiveImage';
import { usePicture } from '@/components/atoms/PictureDialog/hooks/usePicture';

interface PictureDialogProps {
  picture: string;
  open: boolean;
  onClose: () => void;
}

export const PictureDialog = ({
  picture,
  open,
  onClose,
}: PictureDialogProps) => {
  const media = usePicture(picture);

  return (
    <DialogContainer open={open} onClose={onClose} fullScreen>
      <Container>
        <CloseButton onClick={onClose} aria-label={'Close dialog'} />
        {media.map(({ src, alt }) => {
          return (
            <ResponsiveImage
              key={src}
              imgUrl={`/images/${src}`}
              alt={alt}
              sizes="100%"
              priority
              onClose={onClose}
            />
          );
        })}
      </Container>
    </DialogContainer>
  );
};
