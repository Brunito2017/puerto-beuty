export interface Image {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface GalleryProps {
  images: Image[];
}

export interface ImageWithInfoProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  features?: string[];
  reverse?: boolean;
}

export interface TextSectionData {
  title?: string;
  subtitle?: string;
  content: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  background?: 'transparent' | 'light' | 'dark';
  className?: string;
}
