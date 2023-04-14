/* tslint:disable */
/* eslint-disable */
/**
 * cloudwpss23-openapi-cyan
 * OpenAPI Reference für das CloudWP der HAW Hamburg für das SommerSemster 2023
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface GetApiExternal200Response
 */
export interface GetApiExternal200Response {
    /**
     * 
     * @type {any}
     * @memberof GetApiExternal200Response
     */
    'pong'?: any;
}
/**
 * 
 * @export
 * @interface PatchUsersUserIdRequest
 */
export interface PatchUsersUserIdRequest {
    /**
     * 
     * @type {any}
     * @memberof PatchUsersUserIdRequest
     */
    'firstName'?: any;
    /**
     * 
     * @type {any}
     * @memberof PatchUsersUserIdRequest
     */
    'lastName'?: any;
    /**
     * If a new email is given, the user\'s email verified property will be set to false.
     * @type {any}
     * @memberof PatchUsersUserIdRequest
     */
    'email'?: any;
    /**
     * 
     * @type {any}
     * @memberof PatchUsersUserIdRequest
     */
    'dateOfBirth'?: any;
}
/**
 * 
 * @export
 * @interface PostUserRequest
 */
export interface PostUserRequest {
    /**
     * 
     * @type {any}
     * @memberof PostUserRequest
     */
    'firstName': any;
    /**
     * 
     * @type {any}
     * @memberof PostUserRequest
     */
    'lastName': any;
    /**
     * 
     * @type {any}
     * @memberof PostUserRequest
     */
    'email': any;
    /**
     * 
     * @type {any}
     * @memberof PostUserRequest
     */
    'dateOfBirth': any;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * Unique identifier for the given user.
     * @type {any}
     * @memberof User
     */
    'id': any;
    /**
     * 
     * @type {any}
     * @memberof User
     */
    'firstName': any;
    /**
     * 
     * @type {any}
     * @memberof User
     */
    'lastName': any;
    /**
     * 
     * @type {any}
     * @memberof User
     */
    'email': any;
    /**
     * 
     * @type {any}
     * @memberof User
     */
    'dateOfBirth'?: any;
    /**
     * Set to true if the user\'s email has been verified.
     * @type {any}
     * @memberof User
     */
    'emailVerified': any;
    /**
     * The date that the user was created.
     * @type {any}
     * @memberof User
     */
    'createDate'?: any;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiExternal: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/external`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve the information of the user with the matching user ID.
         * @summary Get User Info by User ID
         * @param {any} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersUserId: async (userId: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUsersUserId', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        optionsApiExternal: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/external`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'OPTIONS', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        optionsUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'OPTIONS', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 
         * @param {any} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        optionsUsersUserId: async (userId: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('optionsUsersUserId', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'OPTIONS', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update the information of an existing user.
         * @summary Update User Information
         * @param {any} userId Id of an existing user.
         * @param {PatchUsersUserIdRequest} [patchUsersUserIdRequest] Patch user properties to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUsersUserId: async (userId: any, patchUsersUserIdRequest?: PatchUsersUserIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('patchUsersUserId', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "bearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchUsersUserIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new user.
         * @summary Create New User
         * @param {PostUserRequest} [postUserRequest] Post the necessary fields for the API to create a new user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUser: async (postUserRequest?: PostUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "bearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiExternal(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetApiExternal200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiExternal(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve the information of the user with the matching user ID.
         * @summary Get User Info by User ID
         * @param {any} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsersUserId(userId: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsersUserId(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async optionsApiExternal(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.optionsApiExternal(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async optionsUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.optionsUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 
         * @param {any} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async optionsUsersUserId(userId: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.optionsUsersUserId(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update the information of an existing user.
         * @summary Update User Information
         * @param {any} userId Id of an existing user.
         * @param {PatchUsersUserIdRequest} [patchUsersUserIdRequest] Patch user properties to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchUsersUserId(userId: any, patchUsersUserIdRequest?: PatchUsersUserIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchUsersUserId(userId, patchUsersUserIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new user.
         * @summary Create New User
         * @param {PostUserRequest} [postUserRequest] Post the necessary fields for the API to create a new user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postUser(postUserRequest?: PostUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postUser(postUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiExternal(options?: any): AxiosPromise<GetApiExternal200Response> {
            return localVarFp.getApiExternal(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the information of the user with the matching user ID.
         * @summary Get User Info by User ID
         * @param {any} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersUserId(userId: any, options?: any): AxiosPromise<User> {
            return localVarFp.getUsersUserId(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        optionsApiExternal(options?: any): AxiosPromise<void> {
            return localVarFp.optionsApiExternal(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        optionsUser(options?: any): AxiosPromise<void> {
            return localVarFp.optionsUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 
         * @param {any} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        optionsUsersUserId(userId: any, options?: any): AxiosPromise<void> {
            return localVarFp.optionsUsersUserId(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update the information of an existing user.
         * @summary Update User Information
         * @param {any} userId Id of an existing user.
         * @param {PatchUsersUserIdRequest} [patchUsersUserIdRequest] Patch user properties to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUsersUserId(userId: any, patchUsersUserIdRequest?: PatchUsersUserIdRequest, options?: any): AxiosPromise<User> {
            return localVarFp.patchUsersUserId(userId, patchUsersUserIdRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new user.
         * @summary Create New User
         * @param {PostUserRequest} [postUserRequest] Post the necessary fields for the API to create a new user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUser(postUserRequest?: PostUserRequest, options?: any): AxiosPromise<User> {
            return localVarFp.postUser(postUserRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Your GET endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getApiExternal(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getApiExternal(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve the information of the user with the matching user ID.
     * @summary Get User Info by User ID
     * @param {any} userId Id of an existing user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUsersUserId(userId: any, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getUsersUserId(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public optionsApiExternal(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).optionsApiExternal(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public optionsUser(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).optionsUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 
     * @param {any} userId Id of an existing user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public optionsUsersUserId(userId: any, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).optionsUsersUserId(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the information of an existing user.
     * @summary Update User Information
     * @param {any} userId Id of an existing user.
     * @param {PatchUsersUserIdRequest} [patchUsersUserIdRequest] Patch user properties to update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public patchUsersUserId(userId: any, patchUsersUserIdRequest?: PatchUsersUserIdRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).patchUsersUserId(userId, patchUsersUserIdRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new user.
     * @summary Create New User
     * @param {PostUserRequest} [postUserRequest] Post the necessary fields for the API to create a new user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postUser(postUserRequest?: PostUserRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).postUser(postUserRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


