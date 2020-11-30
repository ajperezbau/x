import { Suggestion } from '@empathy/search-types';
import { ActionsClass } from '../../../../store';
import { cancellablePromise, CancelSymbol } from '../../../../utils/cancellable-promise';
import { noOp } from '../../../../utils/function';
import { QuerySuggestionsActionContext, QuerySuggestionsXStoreModule } from '../types';

/**
 * Class implementation for:
 * - {@link QuerySuggestionsActions.fetchAndSaveSuggestions} action.
 * - {@link QuerySuggestionsActions.cancelFetchAndSaveSuggestions} action.
 *
 * @public
 */
class FetchAndSaveSuggestionsAction implements ActionsClass<QuerySuggestionsXStoreModule> {
  protected cancelFetchAndSaveSuggestionFn: () => void = noOp;

  /**
   * Default implementation for the {@link QuerySuggestionsActions.fetchAndSaveSuggestions}.
   *
   * Performs a dispatch in order to get suggestions. It also saves a pointer to the cancel
   * function got from cancellable promise function. That cancel function rejects the resultant
   * promise if it's called.
   *
   * @param context - The {@link https://vuex.vuejs.org/guide/actions.html | context} of the
   * actions provided by Vuex.
   * @returns Promise.
   */
  fetchAndSaveSuggestions({
    dispatch,
    commit
  }: QuerySuggestionsActionContext): void | Promise<void> {
    const { promise, cancel } = cancellablePromise<Suggestion[]>(dispatch('fetchSuggestions'));
    this.cancelFetchAndSaveSuggestionFn = cancel;
    return promise
      .then(suggestions => commit('setSuggestions', suggestions))
      .catch(err => {
        if (err !== CancelSymbol) {
          // TODO: Functionality is going to be implemented in EX-2663
        }
      });
  }

  /**
   * Default implementation for the {@link QuerySuggestionsActions.cancelFetchAndSaveSuggestions}.
   *
   * Function that rejects the resultant promise, interrupting the synchronous promise flow.
   */
  cancelFetchAndSaveSuggestions(): void {
    this.cancelFetchAndSaveSuggestionFn();
  }
}

const fetchAndSaveSuggestionsAction = new FetchAndSaveSuggestionsAction();

// eslint-disable-next-line jsdoc/require-description-complete-sentence
/**
 * {@inheritDoc FetchAndSaveSuggestionsAction.fetchAndSaveSuggestions}
 *
 * @public
 */
export const fetchAndSaveSuggestions = fetchAndSaveSuggestionsAction.fetchAndSaveSuggestions.bind(
  fetchAndSaveSuggestionsAction
);

// eslint-disable-next-line jsdoc/require-description-complete-sentence
/**
 * {@inheritDoc FetchAndSaveSuggestionsAction.cancelFetchAndSaveSuggestions}
 *
 * @public
 */
//eslint-disable-next-line max-len
export const cancelFetchAndSaveSuggestions = fetchAndSaveSuggestionsAction.cancelFetchAndSaveSuggestions.bind(
  fetchAndSaveSuggestionsAction
);
