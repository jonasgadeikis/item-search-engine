<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Item Search, Filter and Select Engine</v-card-title>
                    <v-card-text>
                        <input-data-section />
                        <v-divider
                            v-if="$_item_getItems.length"
                            class="my-3"
                        />
                        <v-row
                            v-if="$_item_getItems.length"
                            class="my-3"
                        >
                            <v-col cols="3">
                                <filters-section />
                            </v-col>
                            <v-divider vertical />
                            <v-col cols="9">
                                <table-section />
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import item from '../store/mixins/item';
    import InputDataSection from '../components/InputDataSection';
    import FiltersSection from '../components/FiltersSection';
    import TableSection from '../components/TableSection';

    export default {
        name: 'Home',
        components: {
            InputDataSection,
            FiltersSection,
            TableSection,
        },
        mixins: [
            item,
        ],
    };
</script>
