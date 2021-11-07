import { mapGetters, mapMutations, mapActions } from 'vuex';
import { ITEM_NAMESPACE } from '../modules/item';
import { ITEM_GETTERS } from '../modules/item/getters';
import { ITEM_MUTATIONS } from '../modules/item/mutations';
import { ITEM_ACTIONS } from '../modules/item/actions';

export default {
    computed: {
        ...mapGetters({
            $_item_getInputData: `${ITEM_NAMESPACE}/${ITEM_GETTERS.GET_INPUT_DATA}`,
            $_item_getItems: `${ITEM_NAMESPACE}/${ITEM_GETTERS.GET_ITEMS}`,
            $_item_getItemTypes: `${ITEM_NAMESPACE}/${ITEM_GETTERS.GET_ITEM_TYPES}`,
            $_item_getItemGroups: `${ITEM_NAMESPACE}/${ITEM_GETTERS.GET_ITEM_GROUPS}`,
            $_item_getSelectedItemTypes: `${ITEM_NAMESPACE}/${ITEM_GETTERS.GET_SELECTED_ITEM_TYPES}`,
            $_item_getSelectedItemGroups: `${ITEM_NAMESPACE}/${ITEM_GETTERS.GET_SELECTED_ITEM_GROUPS}`,
            $_item_getItemSearchNeedle: `${ITEM_NAMESPACE}/${ITEM_GETTERS.GET_ITEM_SEARCH_NEEDLE}`,
            $_item_getSelectedItems: `${ITEM_NAMESPACE}/${ITEM_GETTERS.GET_SELECTED_ITEMS}`,
            $_item_getSelectionTimeCost: `${ITEM_NAMESPACE}/${ITEM_GETTERS.GET_SELECTION_TIME_COST}`,
            $_item_getFilteredItems: `${ITEM_NAMESPACE}/${ITEM_GETTERS.GET_FILTERED_ITEMS}`,
        }),
    },
    methods: {
        ...mapMutations({
            $_item_setInputDataProperty: `${ITEM_NAMESPACE}/${ITEM_MUTATIONS.SET_INPUT_DATA_PROPERTY}`,
            $_item_setItems: `${ITEM_NAMESPACE}/${ITEM_MUTATIONS.SET_ITEMS}`,
            $_item_setSelectedItemTypes: `${ITEM_NAMESPACE}/${ITEM_MUTATIONS.SET_SELECTED_ITEM_TYPES}`,
            $_item_setSelectedItemGroups: `${ITEM_NAMESPACE}/${ITEM_MUTATIONS.SET_SELECTED_ITEM_GROUPS}`,
            $_item_setItemSearchNeedle: `${ITEM_NAMESPACE}/${ITEM_MUTATIONS.SET_ITEM_SEARCH_NEEDLE}`,
            $_item_setSelectedItems: `${ITEM_NAMESPACE}/${ITEM_MUTATIONS.SET_SELECTED_ITEMS}`,
        }),
        ...mapActions({
            $_item_clearFilters: `${ITEM_NAMESPACE}/${ITEM_ACTIONS.CLEAR_FILTERS}`,
            $_item_selectAllFilteredItems: `${ITEM_NAMESPACE}/${ITEM_ACTIONS.SELECT_ALL_FILTERED_ITEMS}`,
            $_item_clearSelectedItems: `${ITEM_NAMESPACE}/${ITEM_ACTIONS.CLEAR_SELECTED_ITEMS}`,
            $_item_loadData: `${ITEM_NAMESPACE}/${ITEM_ACTIONS.LOAD_DATA}`,
        }),
    },
};
