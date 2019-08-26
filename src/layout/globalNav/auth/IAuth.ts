export interface IAuth {
    isAuthenticated(): boolean;
    login(): void;
    logout(): void;
}
