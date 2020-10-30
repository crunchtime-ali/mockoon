/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// extend Express' Request type
declare namespace Express {
  export interface Request {
    proxied: boolean;
  }
  export interface Response {
    body: any;
    routeUUID: string;
    routeResponseUUID: string;
  }
}
