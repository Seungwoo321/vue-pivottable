import DraggableAttribute from '../src/DraggableAttribute'
import { naturalSort } from '../src/helper/utils'

export default {
  title: 'Components/DraggableAttribute',
  component: DraggableAttribute,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<ul class="pvtAxisContainer pvtHorizList" style="list-style: none; padding: 0; display: flex; gap: 5px;"><story /></ul>'
    })
  ]
}

export const Default = {
  args: {
    name: 'Region',
    sorter: naturalSort
  }
}

export const WithFilterBox = {
  args: {
    name: 'Product',
    sorter: naturalSort,
    open: true,
    attrValues: {
      Apple: 5,
      Banana: 3,
      Carrot: 4,
      Date: 2,
      Eggplant: 1
    },
    valueFilter: {},
    menuLimit: 100
  }
}

export const WithActiveFilter = {
  args: {
    name: 'Category',
    sorter: naturalSort,
    open: false,
    attrValues: {
      Fruit: 10,
      Vegetable: 5
    },
    valueFilter: {
      Fruit: true
    },
    menuLimit: 100
  }
}

export const Disabled = {
  args: {
    name: 'Year',
    sorter: naturalSort,
    sortable: false,
    draggable: false
  }
}

export const SortOnly = {
  args: {
    name: 'Sales',
    sorter: naturalSort,
    sortable: true,
    draggable: false
  }
}

export const AsyncMode = {
  args: {
    name: 'Region',
    sorter: naturalSort,
    async: true,
    unused: true
  }
}

export const TooManyValues = {
  args: {
    name: 'ID',
    sorter: naturalSort,
    open: true,
    attrValues: Object.fromEntries(
      Array.from({ length: 1000 }, (_, i) => [`ID_${i}`, 1])
    ),
    valueFilter: {},
    menuLimit: 500
  }
}
