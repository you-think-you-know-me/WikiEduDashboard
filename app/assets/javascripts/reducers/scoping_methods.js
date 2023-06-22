import { TOGGLE_SCOPING_METHOD, UPDATE_CATEGORIES, UPDATE_CATEGORY_DEPTH, UPDATE_EXCLUDE_CATEGORIES_PETSCAN, UPDATE_EXCLUDE_TEMPLATES_PETSCAN, UPDATE_INCLUDE_CATEGORIES_PETSCAN, UPDATE_INCLUDE_TEMPLATES_PETSCAN, UPDATE_NAMESPACES, UPDATE_PAGEPILE_IDS, UPDATE_PETSCAN_IDS, UPDATE_TEMPLATES } from '../constants/scoping_methods';

const initialState = {
  selected: [],
  categories: {
    depth: 1,
    tracked: [],
  },
  templates: {
    include: [],
  },
  petscan: {
    psids: [],
    categories_includes: [],
    categories_excludes: [],
    templates_includes: [],
    templates_excludes: [],
    namespaces: [
      { label: 'Mainspace', value: '0' },
      { label: 'Talk', value: '1' },
    ],
  },
  pagepile: {
    ids: [],
  },
  descriptionHidden: false,
};

export default function course(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SCOPING_METHOD: {
      if (state.selected.includes(action.method)) {
        return {
          ...state,
          selected: state.selected.filter(method => method !== action.method).sort(),
        };
      }
      return {
        ...state,
        selected: [...state.selected, action.method].sort(),
      };
    }
    case UPDATE_CATEGORY_DEPTH: {
      return {
        ...state,
        categories: {
          ...state.categories,
          depth: action.depth
        }
      };
    }
    case UPDATE_CATEGORIES: {
      return {
        ...state,
        categories: {
          ...state.categories,
          tracked: action.categories
        }
      };
    }
    case UPDATE_TEMPLATES: {
      return {
        ...state,
        templates: {
          ...state.templates,
          include: action.templates
        }
      };
    }
    case UPDATE_PETSCAN_IDS: {
      return {
        ...state,
        petscan: {
          ...state.petscan,
          psids: action.psids
        }
      };
    }
    case UPDATE_INCLUDE_CATEGORIES_PETSCAN: {
      return {
        ...state,
        petscan: {
          ...state.petscan,
          categories_includes: action.categories
        }
      };
    }

    case UPDATE_INCLUDE_TEMPLATES_PETSCAN: {
      return {
        ...state,
        petscan: {
          ...state.petscan,
          templates_includes: action.templates
        }
      };
    }

    case UPDATE_EXCLUDE_CATEGORIES_PETSCAN: {
      return {
        ...state,
        petscan: {
          ...state.petscan,
          categories_excludes: action.categories
        }
      };
    }
    case UPDATE_EXCLUDE_TEMPLATES_PETSCAN: {
      return {
        ...state,
        petscan: {
          ...state.petscan,
          templates_excludes: action.templates
        }
      };
    }

    case UPDATE_PAGEPILE_IDS: {
      return {
        ...state,
        pagepile: {
          ...state.pagepile,
          ids: action.ids
        }
      };
    }

    case UPDATE_NAMESPACES: {
      return {
        ...state,
        petscan: {
          ...state.petscan,
          namespaces: action.namespaces
        }
      };
    }

    default:
      return state;
  }
}
