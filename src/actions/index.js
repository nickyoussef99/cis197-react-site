let nextBlogId = 0
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

export const toggleAddForm = () => ({
    type: 'TOGGLE_ADD_FORM'
})