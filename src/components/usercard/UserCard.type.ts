export interface UserCardProps {
  imgScr?: string;
  name: string;
  userId: number;
  onClick: (id: number) => void;
}
