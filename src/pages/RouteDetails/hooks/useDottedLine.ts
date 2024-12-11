import { useCallback, useEffect, useRef } from 'react';

interface UseDottedLineReturnType {
  lineRef: React.RefObject<HTMLDivElement | null>;
  iconRefs: React.RefObject<(HTMLDivElement | null)[]>;
}

export const useDottedLine = (): UseDottedLineReturnType => {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  const adjustDottedLine = useCallback(() => {
    const halfOfHeight = 2;

    if (iconRefs.current.length > 0 && lineRef.current) {
      const firstIcon = iconRefs.current[0]?.getBoundingClientRect();
      const lastIcon =
        iconRefs.current[iconRefs.current.length - 1]?.getBoundingClientRect();
      const container = lineRef.current.parentElement?.getBoundingClientRect();

      if (firstIcon && lastIcon && container) {
        const start =
          firstIcon.top - container.top + firstIcon.height / halfOfHeight;
        const end =
          lastIcon.top - container.top + lastIcon.height / halfOfHeight;

        lineRef.current.style.top = `${start}px`;
        lineRef.current.style.height = `${end - start}px`;
      }
    }
  }, []);

  useEffect(() => {
    adjustDottedLine();
    window.addEventListener('resize', adjustDottedLine);

    return (): void => {
      window.removeEventListener('resize', adjustDottedLine);
    };
  }, [adjustDottedLine]);

  return { lineRef, iconRefs };
};
