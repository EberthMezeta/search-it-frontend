export interface DocsResponse {
  results: Result[];
}

export interface Result {
  responseHeader: ResponseHeader;
  response:       Response;
}

export interface Response {
  numFound:      number;
  start:         number;
  maxScore:      number;
  numFoundExact: boolean;
  docs:          Doc[];
}

export interface Doc {
  title:     string[];
  text:      string[];
  _snippet_: string[];
  id:        string;
  _version_: number;
  score:     number;
}

export interface ResponseHeader {
  status: number;
  QTime:  number;
  params: Params;
}

export interface Params {
  defType: string;
  qf:      string;
  fl:      string[];
  json:    string;
  rows:    string;
}
