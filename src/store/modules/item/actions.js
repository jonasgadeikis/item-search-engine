import { ITEM_MUTATIONS } from './mutations';
import { ITEM_GETTERS } from './getters';

export const ITEM_ACTIONS = {
    CLEAR_FILTERS: 'CLEAR_FILTERS',
    SELECT_ALL_FILTERED_ITEMS: 'SELECT_ALL_FILTERED_ITEMS',
    CLEAR_SELECTED_ITEMS: 'CLEAR_SELECTED_ITEMS',
    LOAD_DATA: 'LOAD_DATA',
};

export default {
    [ITEM_ACTIONS.CLEAR_FILTERS]: ({ commit }) => {
        commit(ITEM_MUTATIONS.SET_SELECTED_ITEM_TYPES, []);
        commit(ITEM_MUTATIONS.SET_SELECTED_ITEM_GROUPS, []);
        commit(ITEM_MUTATIONS.SET_ITEM_SEARCH_NEEDLE, '');
    },
    [ITEM_ACTIONS.SELECT_ALL_FILTERED_ITEMS]: ({ getters, commit }) => {
        const startTime = new Date().getTime();
        commit(ITEM_MUTATIONS.SET_SELECTED_ITEMS, getters[ITEM_GETTERS.GET_FILTERED_ITEMS]);
        const endTime = new Date().getTime();
        const timeCost = endTime - startTime;
        commit(ITEM_MUTATIONS.SET_SELECTION_TIME_COST, timeCost);
    },
    [ITEM_ACTIONS.CLEAR_SELECTED_ITEMS]: ({ commit }) => {
        commit(ITEM_MUTATIONS.SET_SELECTED_ITEMS, []);
    },
    [ITEM_ACTIONS.LOAD_DATA]: ({ state, commit, dispatch }) => {
        dispatch(ITEM_ACTIONS.CLEAR_FILTERS);
        dispatch(ITEM_ACTIONS.CLEAR_SELECTED_ITEMS);

        const items = Array.from({ length: Number(state.inputData.dataCount) }, (element, index) => {
            const itemType = Math.round(Math.random() * Number(state.inputData.dataTypesCount) - 1);
            const itemGroup = Math.round(Math.random() * Number(state.inputData.dataGroupsCount) - 1);

            return {
                id: index + 1,
                name: `Item ${index + 1}`,
                type: itemType > 0 ? itemType : 0,
                group: itemGroup > 0 ? itemGroup : 0,
            };
        });

        commit(ITEM_MUTATIONS.SET_ITEMS, items);
    },
};
