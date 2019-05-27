import { EventEmitter } from "events";

export interface Request {
  service: string;
  subject: string;
  args: Array<any>;
  metadata?: object;
  tx: string;
  time: Date;
  isPaipRequest: boolean;
}

export interface Response {
  service: string;
  subject: string;
  statusCode: number;
  payload?: any;
  error?: object;
  tx: string;
  time: Date;
  isPaipRequest: boolean;
}

export interface Notice {
  service: string;
  subject: string;
  payload: object;
  metadata?: any;
  tx: string;
  time: Date;
  isPaipNotice: boolean;
}

export interface Server extends EventEmitter {
  id: string;
  ready(): Promise<any>,
  expose(subject: string, handler: (request: Request) => any): void;
  sendRequest(request: Request): Promise<Response>;
  sendNotice(request: Request): Promise<void>;
  shutdown(): Promise<void>;
  getFullName(): string;
}

export interface Options {
  name: string;
  namespace?: string;
  nats?: string | Array<string>;
  timeout?: number;
  log?: string;
}

declare function Paip (options: Options): Server;

export default Paip;