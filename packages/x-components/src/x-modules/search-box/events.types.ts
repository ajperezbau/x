/**
 * Dictionary of the events of SearchBox XModule, where each key is the event name, and the value is
 * the event payload type or `void` if it has no payload.
 *
 * @public
 */
export interface SearchBoxXEvents {
  /**
   * The search-box query has changed
   * * Payload: The new search-box query.
   */
  SearchBoxQueryChanged: string;
  /**
   * The user removed the focus from the search-box.
   * * Payload: none.
   */
  UserBlurredSearchBox: void;
  /**
   * The user focused the search-box
   * * Payload: none.
   */
  UserFocusedSearchBox: void;
  /**
   * The user is typing/pasting a query
   * * Payload: the partial query that the user is typing.
   */
  UserIsTypingAQuery: string;
  /**
   * The user triggered the button that clears the search-box
   * * Payload: none.
   */
  UserPressedClearSearchBoxButton: void;
  /**
   * The user pressed the enter key with the focus on the search-box
   * * Payload: the new query of the search-box.
   */
  UserPressedEnterKey: string;
  /**
   * The user pressed the search button
   * * Payload: The query to search.
   */
  UserPressedSearchButton: string;
  /**
   * The user voiced a query
   * * Payload: The spoken query.
   */
  UserTalked: string;
}
