let nextBlogId = 1
export const setTopDesc = text => ({
    type: 'SET_TOP_DESC',
    text
})

export const setTopImage = text => ({
    type: 'SET_TOP_IMG',
    text
})

export const addBlog = (url, title, text) => ({
    type: 'ADD_BLOG',
    id: nextBlogId++,
    url,
    title,
    text
})

export const toggleAddForm = visible => ({
    type: 'TOGGLE_ADD_FORM',
    visible
})

export const deleteBlog = id => ({
    type: 'DELETE_BLOG',
    id
})

export const editBlog = (id, url, title, text) => ({
    type: 'EDIT_BLOG',
    id,
    url,
    title,
    text
})

export const toggleEditForm = (visible, editId) => ({
    type: 'TOGGLE_EDIT_FORM',
    visible,
    editId
})

export const toggleTopForm = visible => ({
    type: 'TOGGLE_TOP_FORM',
    visible
})