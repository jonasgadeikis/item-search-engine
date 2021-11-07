export const ITEM_GETTERS = {
    GET_INPUT_DATA: 'GET_INPUT_DATA',
    GET_ITEMS: 'GET_ITEMS',
    GET_ITEM_TYPES: 'GET_ITEM_TYPES',
    GET_ITEM_GROUPS: 'GET_ITEM_GROUPS',
    GET_SELECTED_ITEM_TYPES: 'GET_SELECTED_ITEM_TYPES',
    GET_SELECTED_ITEM_GROUPS: 'GET_SELECTED_ITEM_GROUPS',
    GET_ITEM_SEARCH_NEEDLE: 'GET_ITEM_SEARCH_NEEDLE',
    GET_SELECTED_ITEMS: 'GET_SELECTED_ITEMS',
    GET_SELECTION_TIME_COST: 'GET_SELECTION_TIME_COST',
    GET_FILTERED_ITEMS: 'GET_FILTERED_ITEMS',
};

export default {
    [ITEM_GETTERS.GET_INPUT_DATA]: state => state.inputData,
    [ITEM_GETTERS.GET_ITEMS]: state => state.items,
    [ITEM_GETTERS.GET_ITEM_TYPES]: state => [...new Set(state.items.map(item => item.type))].sort((a, b) => a - b),
    [ITEM_GETTERS.GET_ITEM_GROUPS]: state => [...new Set(state.items.map(item => item.group))].sort((a, b) => a - b),
    [ITEM_GETTERS.GET_SELECTED_ITEM_TYPES]: state => state.selectedItemTypes,
    [ITEM_GETTERS.GET_SELECTED_ITEM_GROUPS]: state => state.selectedItemGroups,
    [ITEM_GETTERS.GET_ITEM_SEARCH_NEEDLE]: state => state.itemSearchNeedle,
    [ITEM_GETTERS.GET_SELECTED_ITEMS]: state => state.selectedItems,
    [ITEM_GETTERS.GET_SELECTION_TIME_COST]: state => state.selectionTimeCost,
    [ITEM_GETTERS.GET_FILTERED_ITEMS]: state => {
        const filters = [
            {
                expression: item => state.selectedItemTypes.length ? state.selectedItemTypes.includes(item.type) : true,
            },
            {
                expression: item => state.selectedItemGroups.length ? state.selectedItemGroups.includes(item.group) : true,
            },
            {
                expression: item => state.itemSearchNeedle ? item.name.toLocaleLowerCase().indexOf(state.itemSearchNeedle) > -1 : true,
            },
        ];

        return state.items.filter(item => filters.every(filter => filter.expression(item)));
    },
};
