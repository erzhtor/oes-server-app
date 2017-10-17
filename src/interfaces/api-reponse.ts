export interface IApiResponse {
    status: 'success' | 'error';
    msg?: string;
    jwtToken?: string;
}
