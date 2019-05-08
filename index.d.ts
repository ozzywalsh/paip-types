interface PaipRequest {
  service: string;
  subject: string;
  args: Array<any>;
  metadata?: object;
  tx: string;
  time: Date;
  isPaipRequest: boolean;
}

interface PaipResponse {
  service: string;
  subject: string;
  statusCode: number;
  payload?: any;
  error?: object;
  tx: string;
  time: Date;
  isPaipRequest: boolean;
}

interface PaipNotice {
  service: string;
  subject: string;
  payload: object;
  metadata?: any;
  tx: string;
  time: Date;
  isPaipNotice: boolean;
}

interface PaipServer {
  id: string;
  ready(): Promise<any>,
  expose(subject: string, handler: (request: PaipRequest) => any): void;
  sendRequest(request: PaipRequest): Promise<PaipResponse>;
  sendNotice(request: PaipRequest): Promise<void>;
  shutdown(): Promise<void>;
  getFullName(): string;
}

interface PaipOptions {
  name: string;
  namespace?: string;
  nats?: string | Array<string>;
  timeout?: number;
  log?: string;
}

declare function Paip (options: PaipOptions): PaipServer;

export = Paip;
