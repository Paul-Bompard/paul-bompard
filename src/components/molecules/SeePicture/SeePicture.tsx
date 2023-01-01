import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { PictureDialog } from '@/components/atoms/PictureDialog/PictureDialog';
import { Eye } from './SeePicture.styles';

interface SeePictureProps {
  picture: string;
  alt?: string;
}

export const SeePicture = ({
  picture,
  alt = 'default alt',
}: SeePictureProps) => {
  const [showPicture, setShowPicture] = useState(false);

  return (
    <>
      <Eye onClick={() => setShowPicture(!showPicture)}>
        <VisibilityIcon fontSize={'inherit'} />
      </Eye>
      <PictureDialog
        open={showPicture}
        picture={picture}
        alt={alt}
        onClose={() => setShowPicture(false)}
      />
    </>
  );
};
