export enum APIStatus { IDLE, PENDING, REJECTED, FULFILLED };

export type APIError = {
    message: string,
    code: number
};

export type APIData<DataType = any> = {
    status: APIStatus,
    error?: APIError,
    data?: DataType
};

export type AxiosConfig = {
    baseURL?: string
};
