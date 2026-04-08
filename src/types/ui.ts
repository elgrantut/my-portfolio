import type { UseEmblaCarouselType } from 'embla-carousel-react';

type UseEmblaCarouselFn = typeof import('embla-carousel-react').default;
type UseCarouselParameters = Parameters<UseEmblaCarouselFn>;

export type CarouselApi = UseEmblaCarouselType[1];
export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];

export type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

export type CarouselContextProps = {
  carouselRef: ReturnType<UseEmblaCarouselFn>[0];
  api: ReturnType<UseEmblaCarouselFn>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;
