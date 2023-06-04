export interface IAuth {
    user: IUser | null;
}

export interface IRole {
    id: number;
    name: string;
}

export interface IUser {
    id: string | null;
    fullName: string | null;
    userName: string | null;
    phone: string | null;
    password: string | null;
    email: string | null;
    role: IRole;
}

export interface ILogin {
    username: string;
    password: string;
}