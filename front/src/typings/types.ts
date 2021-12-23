export interface IUser {
  email: string;
  name: string;
  password: string;
  profileImage: string;
  socialOnly: boolean;
  username: string;
  __v: number;
  _id: string;
}

export interface IHabit {
  title: string;
  color: string;
  memo?: string;
  alarm: boolean;
  cycle: string;
  cycleValue: number;
  username: string;
}
