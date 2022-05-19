import { endpointAdapterFactory } from '@empathyco/x-adapter-next';
import { SearchRequest, SearchResponse } from '@empathyco/x-types';
import { searchRequestMapper } from '../mappers/request/search-request.mapper';
import { searchResponseMapper } from '../mappers/response/search-response.mapper';

export const searchEndpointAdapter = endpointAdapterFactory<SearchRequest, SearchResponse>({
  endpoint:
    'https://api.{extraParams.env(.)}empathy.co/search/v1/query/{extraParams.instance}/search',
  requestMapper: searchRequestMapper,
  responseMapper: searchResponseMapper
});
