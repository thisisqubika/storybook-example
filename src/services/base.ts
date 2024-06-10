export type BaseURL = URL | string;

export type FetchResource = URL | string | string[] | {
  pathname: string | string[];
  searchParams?: Record<string, unknown>;
}; // type FetchResource

export const MIME_TYPES = {
  json: 'application/json',
}; // const MIME_TYPES

export interface FetchOptions extends Omit<RequestInit, 'body'> {
  body?: unknown;
} // interface FetchOptions

export class FetchError extends Error {
  request: Request;
  response?: Response;

  constructor(message: string, request: Request, response?: Response) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.request = request;
    this.response = response;
  }
} // class FetchError

export interface ApiArgs {
  baseURL: BaseURL;
  defaultHeaders?: HeadersInit;
} // interface ApiArgs

export const DEFAULT_HEADERS: HeadersInit = {
  Accept: MIME_TYPES.json,
  'Content-Type': MIME_TYPES.json,
}; // const DEFAULT_HEADERS

/** Base class for the representation of APIs used by the frontend.
*/
export class Api {
  _baseURL: BaseURL;
  _defaultHeaders?: HeadersInit;

  constructor({
    baseURL,
    defaultHeaders,
  }: ApiArgs) {
    this._baseURL = baseURL;
    this._defaultHeaders = defaultHeaders ?? DEFAULT_HEADERS;
  } // constructor

  /** Creates a URL from a given resource. Uses this object's `baseURL`.
  */
  url(resource: FetchResource) {
    if (resource instanceof URL) {
      return resource;
    }
    if (Array.isArray(resource) || typeof resource === 'string') {
      resource = { pathname: resource };
    }
    const { pathname, searchParams = {} } = resource;
    resource = new URL(
      typeof pathname === 'string' ? pathname
        : `/${pathname.map(encodeURIComponent).join('/')}`,
      this._baseURL,
    );
    for (const [paramName, paramValue] of Object.entries(searchParams)) {
      if (Array.isArray(paramValue)) {
        paramValue.forEach(
          (v) => resource.searchParams.append(paramName, v),
        );
      } else if (paramValue !== undefined) {
        resource.searchParams.set(paramName, `${paramValue}`);
      }
    }
    return resource;
  } // url

  /** Creates a Request instance for the fetch method.
  */
  request(resource: FetchResource, options?: FetchOptions) {
    const url = this.url(resource);
    options = { ...options };
    if (options.body !== undefined) {
      options.body = JSON.stringify(options.body);
    }
    if (!options.headers) {
      options.headers = { ...this._defaultHeaders };
    }
    return new Request(url, options as RequestInit);
  } // request

  /** Wrapper for the standard `fetch` function. It may take any data as `body`,
   * which will be turned to JSON. It also fails when the response status is not
   * 2xx. Resolves to the parsed response.
  */
  async fetch<D>(resource: FetchResource, options?: FetchOptions): Promise<D> {
    const request = this.request(resource, options as RequestInit);
    let message, response;
    try {
      response = await globalThis.fetch(request);
      if (response.ok) {
        const payload = response.status === 204 ? null : await response.json();
        return payload;
      }
      message = `Request failed with ${response.status}: ${
        JSON.stringify(response.statusText)}!`;
    } catch (error) {
      message = (error instanceof Error) ? error.message : `${error}`;
    }
    throw new FetchError(message, request, response);
  } // fetch

  /** Synonym for the `fetch` method using the `DELETE` HTTP method.
  */
  async delete<D>(resource: FetchResource, options?: FetchOptions): Promise<D> {
    return this.fetch(resource, { ...options, method: 'DELETE' });
  } // delete

  /** Synonym for the `fetch` method using the `GET` HTTP method.
  */
  async get<D>(resource: FetchResource, options?: FetchOptions): Promise<D> {
    return this.fetch(resource, { ...options, method: 'GET' });
  } // get

  /** Synonym for the `fetch` method using the `PATCH` HTTP method.
  */
  async patch<D>(resource: FetchResource, options?: FetchOptions): Promise<D> {
    return this.fetch(resource, { ...options, method: 'PATCH' });
  } // patch

  /** Synonym for the `fetch` method using the `POST` HTTP method.
  */
  async post<D>(resource: FetchResource, options?: FetchOptions): Promise<D> {
    return this.fetch(resource, { ...options, method: 'POST' });
  } // post

  /** Synonym for the `fetch` method using the `PUT` HTTP method.
  */
  async put<D>(resource: FetchResource, options?: FetchOptions): Promise<D> {
    return this.fetch(resource, { ...options, method: 'PUT' });
  } // put

} // class Api
