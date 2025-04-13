interface IAuth {
  uid: string;
  email: string | null;
  displayName?: string | null;
  password?: string;
}

export type { IAuth };
