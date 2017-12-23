export const fetchItem = (id = 1) => fetch(`http://localhost:5000/item/${id}`, { method: 'GET', mode: 'cors' });
