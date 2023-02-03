export const ACTION_GET = 'ACTION_GET';
export const ACTION_DELETE = 'ACTION_DELETE';
export const ACTION_ADD = 'ACTION_ADD';

export const getList = (payload) => ({type: ACTION_GET, payload});
export const deleteList = (payload) => ({type: ACTION_DELETE, payload});
export const addList = (payload) => ({type: ACTION_ADD, payload});