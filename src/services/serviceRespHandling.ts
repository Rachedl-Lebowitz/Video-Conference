import axios, { AxiosResponse, AxiosInstance } from "axios";
import { APIError, AxiosConfig } from "./types";

export const InternalError = {
    message: 'Internal errror during request',
    code: -500
};

export const getExceptionPayload = (ex: unknown): APIError => {
    if (typeof ex !== 'object' || !ex) {
        return InternalError;
    }

    const typedException = ex as APIError;
    if (ex.hasOwnProperty('message') && typeof typedException.message === 'string'
        && ex.hasOwnProperty('code') && typeof typedException.code === 'number') {
        return {
            message: typedException.message,
            code: typedException.code
        }
    }

    return {
        message: '',
        code: 0
    }
}

export const onFulfilledRequest = (response: AxiosResponse) => response;
export const onRejectedResponse = (error: any): any => Promise.reject(InternalError);

const config: AxiosConfig = {
    baseURL: "mock"
};
export const publicRequest: AxiosInstance = axios.create(config) as AxiosInstance;

publicRequest.interceptors.response.use(onFulfilledRequest, onRejectedResponse);
