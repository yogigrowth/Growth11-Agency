import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onError?: (e: any) => void;
  'data-testid'?: string;
  eager?: boolean; // Skip lazy loading for above-fold images
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f3f4f6"/></svg>',
  onError,
  'data-testid': dataTestId,
  eager = false
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState(eager ? src : placeholder);
  const [imageLoaded, setImageLoaded] = useState(eager);
  const [isInView, setIsInView] = useState(eager);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (eager) return; // Skip intersection observer for eager loading

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, isInView, eager]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = (e: any) => {
    setImageLoaded(false);
    if (onError) {
      onError(e);
    }
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        imageLoaded ? 'opacity-100' : 'opacity-70'
      } ${className}`}
      onLoad={handleLoad}
      onError={handleError}
      data-testid={dataTestId}
      loading={eager ? 'eager' : 'lazy'}
    />
  );
}