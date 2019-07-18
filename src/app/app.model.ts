export interface IUser {
  name: string;
}

export interface IUI {
  online: boolean;
}

// FLUX Standard Action
export interface FSA {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

