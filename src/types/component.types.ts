export interface CardProps {
  category: string;
  createdAt: string;
  title: string;
  description: string;
  readTime: string;
}

export interface CardBodyProps extends Omit<CardProps, "readTime"> {}

export interface CardFooterProps extends Pick<CardProps, "readTime"> {}

export interface CardHeaderProps {
  imageSrc: string;
}
