export interface User{
    uid?:string;
    email:string;
    firstName:string;
    lastName:string;
    tel?:string;
    gender?:string;
    birthday?:number;
    gov?:string;
    photoURL?:string;
    follower?:number;
    following?: number;
    coverURL?: string;
    bio?: string;
    fbLink?: string;
    instaLink?: string;
    snapLink?: string;
}