# Item Filter, Search and Select Engine

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### What is it for?
This engine is created to solve multiple select with large amount of data selection problem.
When selecting a lot of items at once, selection state is saved in DOM, and upon deselecting one item, browser starts to lag.
Solution is to not use select with large amount of elements which can be multiple selected.
Here a data table approach is used to hold data in pages, but still have the ability to select a lot of items.

### How it works
* Once opened you will see a form to input data
* Data requires item count, item type count and item group count
* Type and Group will be filters along with search be name
* Once all necessary data is provided "Load data" can be clicked to load the data
* Then filters and item table will be generated from given data
* You can filter and select all filtered data at once
* Selection time cost will be shown below the item table
