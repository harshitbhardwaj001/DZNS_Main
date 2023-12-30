export const HOST = process.env.SERVER_URL;
export const API_URL = `${HOST}/api`;
export const AUTH_ROUTES = `${API_URL}/auth`;
export const SERVICES_ROUTES = `${API_URL}/services`;
export const ORDERS_ROUTES = `${API_URL}/orders`;

export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
export const GET_USER_INFO = `${AUTH_ROUTES}/get-user-info`;
export const SET_USER_INFO = `${AUTH_ROUTES}/set-user-info`;
export const SET_USER_IMAGE = `${AUTH_ROUTES}/set-user-image`;

export const ADD_SERVICE_ROUTE = `${SERVICES_ROUTES}/add`;
export const GET_USER_SERVICES_ROUTE = `${SERVICES_ROUTES}/get-user-services`;
export const GET_SERVICE_DATA = `${SERVICES_ROUTES}/get-service-data`;
export const EDIT_SERVICE_ROUTE = `${SERVICES_ROUTES}/edit-service`;
export const SEARCH_SERVICE_ROUTE = `${SERVICES_ROUTES}/search-services`;

export const CREATE_ORDER = `${ORDERS_ROUTES}/create`;
