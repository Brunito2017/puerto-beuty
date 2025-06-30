export interface Image {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface GalleryProps {
  images: Image[];
}