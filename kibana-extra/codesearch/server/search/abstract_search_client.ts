/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { EsClient } from '@codesearch/esqueue';

import { SearchRequest, SearchResult } from '../../model';
import { Log } from '../log';
import { SearchClient } from './search_client';

export abstract class AbstractSearchClient implements SearchClient {
  constructor(protected readonly client: EsClient, protected readonly log: Log) {}

  public async search(req: SearchRequest): Promise<SearchResult> {
    // This is the abstract implementation, you should override this function.
    return new Promise<SearchResult>((resolve, reject) => {
      resolve();
    });
  }
}
