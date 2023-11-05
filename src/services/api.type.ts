export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Albums = {
  id: number;
  userId: number;
  title: string;
};

export type PhotoRes = {
  url: string;
  title: string;
};
