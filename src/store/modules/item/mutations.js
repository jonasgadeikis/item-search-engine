export const ITEM_MUTATIONS = {
    SET_INPUT_DATA_PROPERTY: 'SET_INPUT_DATA_PROPERTY',
    SET_ITEMS: 'SET_ITEMS',
    SET_SELECTED_ITEM_TYPES: 'SET_SELECTED_ITEM_TYPES',
    SET_SELECTED_ITEM_GROUPS: 'SET_SELECTED_ITEM_GROUPS',
    SET_ITEM_SEARCH_NEEDLE: 'SET_ITEM_SEARCH_NEEDLE',
    SET_SELECTED_ITEMS: 'SET_SELECTED_ITEMS',
    SET_SELECTION_TIME_COST: 'SET_SELECTION_TIME_COST',
};

export default {
    [ITEM_MUTATIONS.SET_INPUT_DATA_PROPERTY]: (state, { property, value }) => state.inputData[property] = value,
    [ITEM_MUTATIONS.SET_ITEMS]: (state, items) => state.items = items,
    [ITEM_MUTATIONS.SET_SELECTED_ITEM_TYPES]: (state, type) => state.selectedItemTypes = type,
    [ITEM_MUTATIONS.SET_SELECTED_ITEM_GROUPS]: (state, group) => state.selectedItemGroups = group,
    [ITEM_MUTATIONS.SET_ITEM_SEARCH_NEEDLE]: (state, needle) => state.itemSearchNeedle = needle,
    [ITEM_MUTATIONS.SET_SELECTED_ITEMS]: (state, items) => state.selectedItems = items,
    [ITEM_MUTATIONS.SET_SELECTION_TIME_COST]: (state, time) => state.selectionTimeCost = time,
};
