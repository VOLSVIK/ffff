console.log('=======03-01=======')
type Callback = <T extends IGetResp>(data?: T) => void;
export type Options = Record<string, string>;
export type LoEndp =  Response;
export interface IGetResp {
    endpoint: Response | string;
    options?: Options;
}
export enum GetEndpoint {
    Sources = "sources", 
    News = "everything",
    LoaderApiKey = 'f5e0fc55045a451f85aae42d41415937'
};
class Loader {
    private baseLink: string;
    private options: Options;
    constructor(baseLink: string, options:Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: IGetResp,
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ): void
    {
            this.load('GET', endpoint, callback, options)
    }

    errorHandler(res:Response): Response {
        console.log('=======errorHandler=======')
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options:{ sources?: string; }, endpoint: Response | string): string {
        console.log('=======makeUrl=======')
        const urlOptions: Options = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: Response | string, callback: Callback, options = {}): void{
        console.log('=======load=======')
                console.log(endpoint)
            console.log('=======load=01======')
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}
console.log('=======03=======')
export default Loader;

// class Loader {
//     constructor(baseLink, options) {
//         this.baseLink = baseLink;
//         this.options = options;
//     }

//     getResp(
//         { endpoint, options = {} },
//         callback = () => {
//             console.error('No callback for GET response');
//         }
//     ) {
//         this.load('GET', endpoint, callback, options);
//     }

//     errorHandler(res) {
//         if (!res.ok) {
//             if (res.status === 401 || res.status === 404)
//                 console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
//             throw Error(res.statusText);
//         }

//         return res;
//     }

//     makeUrl(options, endpoint) {
//         const urlOptions = { ...this.options, ...options };
//         let url = `${this.baseLink}${endpoint}?`;

//         Object.keys(urlOptions).forEach((key) => {
//             url += `${key}=${urlOptions[key]}&`;
//         });

//         return url.slice(0, -1);
//     }

//     load(method, endpoint, callback, options = {}) {
//         fetch(this.makeUrl(options, endpoint), { method })
//             .then(this.errorHandler)
//             .then((res) => res.json())
//             .then((data) => callback(data))
//             .catch((err) => console.error(err));
//     }
// }

// export default Loader;