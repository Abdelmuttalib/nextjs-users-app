export type UserT = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type ResponseT = {
  data: UserT[];
  page?: number | undefined;
  per_page?: number | undefined;
  total?: number | undefined;
  total_pages?: number | undefined;
  support?:
    | {
        url: string | undefined;
        text: string | undefined;
      }
    | undefined;
};
