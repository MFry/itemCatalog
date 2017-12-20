export const fetchItem = (id = 1) => fetch(`/item/${id}`, { method: 'GET' });
