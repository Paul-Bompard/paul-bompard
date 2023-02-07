import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { PictureDialog } from '@/components/atoms/PictureDialog/PictureDialog';
import { Eye } from './SeePicture.styles';

interface SeePictureProps {
  picture: string;
}

export const SeePicture = ({ picture }: SeePictureProps) => {
  const [showPicture, setShowPicture] = useState(false);

  return (
    <>
      <Eye
        onClick={() => setShowPicture(!showPicture)}
        aria-label={'see associate screenshot'}
      >
        <VisibilityIcon fontSize={'inherit'} />
      </Eye>
      <PictureDialog
        open={showPicture}
        picture={picture}
        onClose={() => setShowPicture(false)}
      />
    </>
  );
};
