export interface Statistics {
  disk_pct:                  number;
  docs_per_extension:        DocsPerExtension;
  docs:                      number;
  mem_pct:                   number;
  cpu_pct:                   number;
  estimated_docs_until_full: number;
}

export interface DocsPerExtension {
  ".pdf": number;
}
