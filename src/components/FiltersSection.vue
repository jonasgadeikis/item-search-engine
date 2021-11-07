<template>
    <div>
        <p class="mb-3 caption font-weight-bold">Item Types</p>
        <div
            v-for="(itemType, itemTypeIndex) in $_item_getItemTypes"
            :key="`type-${itemTypeIndex}`"
        >
            <v-checkbox
                class="mt-0"
                dense
                :value="itemType"
                v-model="selectedItemTypes"
            >
                <template #label>
                    <span>Item Type {{ itemType }} ({{ getItemCount('type', itemType) }})</span>
                </template>
            </v-checkbox>
        </div>
        <p class="mt-3 mb-3 caption font-weight-bold">Item Groups</p>
        <div
            v-for="(itemGroup, itemGroupIndex) in $_item_getItemGroups"
            :key="`group-${itemGroupIndex}`"
        >
            <v-checkbox
                class="mt-0"
                dense
                :value="itemGroup"
                v-model="selectedItemGroups"
            >
                <template #label>
                    <span>Item Group {{ itemGroup }} ({{ getItemCount('group', itemGroup) }})</span>
                </template>
            </v-checkbox>
        </div>
        <v-btn
            color="primary"
            class="mt-3 text-none"
            @click="$_item_clearFilters"
        >
            Clear filters
        </v-btn>
    </div>
</template>

<script>
    import item from '../store/mixins/item';

    export default {
        name: 'FiltersSection',
        mixins: [
            item,
        ],
        computed: {
            selectedItemTypes: {
                get() {
                    return this.$_item_getSelectedItemTypes;
                },
                set(value) {
                    this.$_item_setSelectedItemTypes(value);
                },
            },
            selectedItemGroups: {
                get() {
                    return this.$_item_getSelectedItemGroups;
                },
                set(value) {
                    this.$_item_setSelectedItemGroups(value);
                },
            },
            itemFilters() {
                return [
                    {
                        conditions: ['type', 'group'],
                        expression: (item, property, value) => item[property] === value,
                    },
                    {
                        conditions: ['group'],
                        expression: item => this.$_item_getSelectedItemTypes.length ? this.$_item_getSelectedItemTypes.includes(item.type) : true,
                    },
                    {
                        conditions: ['type'],
                        expression: item => this.$_item_getSelectedItemGroups.length ? this.$_item_getSelectedItemGroups.includes(item.group) : true,
                    },
                    {
                        conditions: ['type', 'group'],
                        expression: item => this.$_item_getItemSearchNeedle ? item.name.toLocaleLowerCase().indexOf(this.$_item_getItemSearchNeedle) > -1 : true,
                    },
                ];
            },
        },
        methods: {
            getItemCount(property, value) {
                const neededItemFilters = this.itemFilters.filter(filter => filter.conditions.includes(property));

                return this.$_item_getItems.filter(item => neededItemFilters.every(filter => filter.expression(item, property, value))).length;
            }
        },
    };
</script>
