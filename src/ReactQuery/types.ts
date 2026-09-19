export type Post = {
  id: number;
  title: string;
  summary: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};