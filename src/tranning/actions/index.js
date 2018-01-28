import * as types from './../constants/ActionTypes'

export const status = () => {
    return {
        type: types.TOGGLE_STATUS
    }
}

export const sort = (sort) => {
    return {
        type: types.SORT,
        sort: sort
    }
}

export const table = (table) => {
    return {
        type: types.TABLE,
        table: table
    }
}

export const social = (social) => {
    return {
        type: types.SOCIAL,
        social: social
    }
}

export const visibilityFilter = (visibilityFilter) => {
    return { 
        type: types.VISIBILITY_FILTER,
        visibilityFilter: visibilityFilter
    }
}

