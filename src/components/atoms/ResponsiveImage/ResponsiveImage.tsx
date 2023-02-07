import React, { ReactNode, useEffect, useState } from 'react';
import { PADDING_DIALOG } from '@/components/atoms/PictureDialog/PictureDialog.styles';
import {
  ImageSurface,
  LoadingContainer,
  ResponsiveImageWrapper,
  RoundedImage,
} from './ResponsiveImage.styles';
import { Size, useResponsiveImageStyle } from './hooks/useResponsiveImageStyle';
import { CircularLoader } from '../../atoms/CircularLoader/CircularLoader';

interface ResponsiveImageProps {
  imgUrl: string;
  alt: string;
  label?: string;
  topLeftSlot?: ReactNode;
  sizes?: string;
  priority?: boolean;
  dropShadow?: boolean;
  onClose?: () => void;
}

export const ResponsiveImage = ({
  imgUrl,
  alt,
  sizes,
  priority = false,
  dropShadow = false,
}: ResponsiveImageProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [mediaSize, setMediaSize] = useState<Size>();
  const { ref, imageWrapperStyle } = useResponsiveImageStyle(mediaSize);
  const [ratio, setRatio] = useState(0);
  const windowSize = useWindowSize();
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <ImageSurface ref={ref} $isZoomed={isZoomed}>
      {isImageLoading && (
        <LoadingContainer>
          <CircularLoader />
        </LoadingContainer>
      )}
      <ResponsiveImageWrapper
        style={imageWrapperStyle}
        $isZoomed={isZoomed}
        $dropShadow={dropShadow}
      >
        <RoundedImage
          src={imgUrl}
          onLoadingComplete={(img) => {
            setRatio(img.naturalWidth / img.naturalHeight);
            setMediaSize({
              width: img.naturalWidth,
              height: img.naturalHeight,
            });
            setIsImageLoading(false);
          }}
          onClick={handleClick}
          alt={alt}
          sizes={sizes}
          priority={priority}
          fill={!isZoomed}
          width={isZoomed ? windowSize.width - PADDING_DIALOG : undefined}
          height={
            isZoomed ? (windowSize.width - PADDING_DIALOG) / ratio : undefined
          }
          style={
            isZoomed
              ? {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }
              : {}
          }
        />
      </ResponsiveImageWrapper>
    </ImageSurface>
  );
};

// Hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
