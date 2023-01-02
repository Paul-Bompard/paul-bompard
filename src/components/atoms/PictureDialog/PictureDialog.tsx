import {
  CloseButton,
  Container,
  DialogContainer,
  Picture,
} from '@/components/atoms/PictureDialog/PictureDialog.styles';

interface PictureDialogProps {
  picture: string;
  open: boolean;
  onClose: () => void;
  alt: string;
}

export const PictureDialog = ({
  picture,
  open,
  onClose,
  alt,
}: PictureDialogProps) => {
  // TODO LOADER
  // const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    // setIsLoaded(true);
  };

  return (
    <DialogContainer open={open} onClose={onClose}>
      <Container>
        <CloseButton onClick={onClose} />
        <Picture
          src={`/images/${picture}`}
          onLoad={handleLoad}
          onError={(error) => {
            console.error(error);
          }}
          fill
          sizes="100%"
          alt={alt}
          priority
        />
      </Container>
    </DialogContainer>
  );
};
