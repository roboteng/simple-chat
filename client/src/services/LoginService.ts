export interface LoginService {
  isValid(user: string, password: string): Promise<boolean>
}