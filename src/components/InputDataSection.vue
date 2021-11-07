<template>
    <div>
        <p class="ma-0 caption font-weight-bold">Data Properties</p>
        <v-row>
            <v-col
                cols="12"
                md="4"
            >
                <v-text-field
                    type="number"
                    label="Data Count"
                    v-model="dataCount"
                />
            </v-col>
            <v-col
                cols="12"
                md="4"
            >
                <v-text-field
                    type="number"
                    label="Data Types Count"
                    v-model="dataTypesCount"
                />
            </v-col>
            <v-col
                cols="12"
                md="4"
            >
                <v-text-field
                    type="number"
                    label="Data Groups Count"
                    v-model="dataGroupsCount"
                />
            </v-col>
            <v-col
                cols="12"
                class="d-flex"
            >
                <v-spacer />
                <v-btn
                    color="primary"
                    class="text-none"
                    @click="$_item_loadData"
                >
                    Load Data
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import item from '../store/mixins/item';

    export default {
        name: 'InputDataSection',
        mixins: [
            item,
        ],
        computed: {
            dataCount: {
                get() {
                    return this.$_item_getInputData.dataCount;
                },
                set(value) {
                    this.$_item_setInputDataProperty({
                        property: 'dataCount',
                        value,
                    });
                },
            },
            dataTypesCount: {
                get() {
                    return this.$_item_getInputData.dataTypesCount;
                },
                set(value) {
                    this.$_item_setInputDataProperty({
                        property: 'dataTypesCount',
                        value,
                    });
                },
            },
            dataGroupsCount: {
                get() {
                    return this.$_item_getInputData.dataGroupsCount;
                },
                set(value) {
                    this.$_item_setInputDataProperty({
                        property: 'dataGroupsCount',
                        value,
                    });
                },
            },
        },
    };
</script>
