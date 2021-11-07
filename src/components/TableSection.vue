<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-data-table
                    :items="$_item_getFilteredItems"
                    :headers="headers"
                    :search="searchNeedle"
                    show-select
                    v-model="selectedItems"
                >
                    <template #top>
                        <v-text-field
                            label="Name"
                            hint="Filter by name fragment"
                            persistent-hint
                            v-model="searchNeedle"
                        />
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="d-flex">
                <v-spacer />
                <v-btn
                    color="primary"
                    class="text-none"
                    @click="$_item_selectAllFilteredItems"
                >
                    Select All Filtered Items ({{ $_item_getFilteredItems.length }})
                </v-btn>
                <v-btn
                    outlined
                    color="primary"
                    class="ml-3 text-none"
                    @click="$_item_clearSelectedItems"
                >
                    Clear Selected Items
                </v-btn>
            </v-col>
        </v-row>
        <v-row v-if="$_item_getSelectionTimeCost">
            <v-col cols="12">
                <p class="headline ma-0">Selection took {{ $_item_getSelectionTimeCost }} ms.</p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import item from '../store/mixins/item';

    export default {
        name: 'TableSection',
        mixins: [
            item,
        ],
        computed: {
            headers() {
                return [
                    {
                        text: 'Id',
                        value: 'id',
                    },
                    {
                        text: 'Name',
                        value: 'name',
                    },
                    {
                        text: 'Type',
                        value: 'type',
                    },
                    {
                        text: 'Group',
                        value: 'group',
                    },
                ];
            },
            searchNeedle: {
                get() {
                    return this.$_item_getItemSearchNeedle;
                },
                set(value) {
                    this.$_item_setItemSearchNeedle(value);
                },
            },
            selectedItems: {
                get() {
                    return this.$_item_getSelectedItems;
                },
                set(value) {
                    this.$_item_setSelectedItems(value);
                },
            },
        },
    };
</script>
