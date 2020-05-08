import { NextQueriesRequest } from '@empathy/search-adapter';
import { NextQuery } from '@empathy/search-types';

/**
 * Dictionary of the events of NextQueries XModule, where each key is the event name, and the value
 * is the event payload type or `void` if it has no payload.
 *
 * @public
 */
export interface NextQueriesXEvents {
  /**
   * Next Queries have been changed.
   * * Payload: The new {@link @empathy/search-types#NextQuery | next queries}.
   */
  NextQueriesChanged: NextQuery[];
  /**
   * The current next queries have been displayed to the user.
   * * Payload: The displayed next queries.
   */
  NextQueriesDisplayed: NextQuery[];
  /**
   * Any property of the next-queries request has changed
   * * Payload: The new next-queries request or `null` if there is not enough data in the state
   * to conform a valid request.
   */
  NextQueriesRequestChanged: NextQueriesRequest | null;
  /**
   * The user has selected a next-query
   * * Payload: The next query that has been selected by the user.
   */
  UserSelectedANextQuery: NextQuery;
}
