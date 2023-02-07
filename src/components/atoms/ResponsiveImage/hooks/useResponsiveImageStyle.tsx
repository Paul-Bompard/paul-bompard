import { CSSProperties } from 'react';
import { useResizeDetector } from 'react-resize-detector';

export type Size = {
  width: number;
  height: number;
};

/**
 *
 * @param imgRawSize The raw size of the image we want to display
 * @param padding An optional padding in pixels (defaults to 0)
 * @returns {Object} An object in the format { ref, imageStyle }
 * @returns {Object} ref: A ref to attach to the container we want to fit the image in
 * @returns {Object} imageWrapperStyle: The computed style object
 */

export function useResponsiveImageStyle(
  imgRawSize: Size | undefined,
  padding = 0
) {
  const {
    width: containerWidth,
    height: containerHeight,
    ref,
  } = useResizeDetector<HTMLDivElement>();

  // default image size before being resized
  // width and height are set to 1 to avoid next img component throwing a warning
  let imageWrapperStyle: CSSProperties = { width: 1, height: 1, opacity: 0 };

  if (
    imgRawSize !== undefined &&
    containerWidth !== undefined &&
    containerHeight !== undefined
  ) {
    // minimum available width/height is 1px to avoid dividing by 0 / negative values
    const availableWidth = Math.max(containerWidth - padding * 2, 1);
    const availableHeight = Math.max(containerHeight - padding * 2, 1);

    const widthRatio = imgRawSize.width / availableWidth;
    const heightRatio = imgRawSize.height / availableHeight;
    // we resize by the size that needs the biggest size reduction
    const resizeFactor = Math.max(widthRatio, heightRatio, 1);

    const computedWidth = imgRawSize.width / resizeFactor;
    const computedHeight = imgRawSize.height / resizeFactor;
    const remainingWidthSpace = availableWidth - computedWidth;
    const remainingHeightSpace = availableHeight - computedHeight;

    imageWrapperStyle = {
      width: computedWidth,
      height: computedHeight,
      top: padding + remainingHeightSpace / 2,
      left: padding + remainingWidthSpace / 2,
      opacity: 1,
    };
  }

  return {
    ref,
    imageWrapperStyle,
  };
}
