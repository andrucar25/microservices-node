import { Result } from "neverthrow";

export type AuthTokens = { accessToken: string; refreshToken: string };
export type RequestResult = Result<any, Error>;
export interface ApiRepository {
  requestByType(url: string, method: string, data: any): Promise<RequestResult>;
}