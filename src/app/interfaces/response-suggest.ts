export interface ResponseSuggest {
  results: Results;
}

export interface Results {
  responseHeader: ResponseHeader;
  command:        string;
  suggest:        Suggest;
}

export interface ResponseHeader {
  status: number;
  QTime:  number;
}

export interface Suggest {
  mySuggester: MySuggester;
}

export interface MySuggester {
  Tes: Tes;
}

export interface Tes {
  numFound:    number;
  suggestions: Suggestion[];
}

export interface Suggestion {
  term:    string;
  weight:  number;
  payload: string;
}
