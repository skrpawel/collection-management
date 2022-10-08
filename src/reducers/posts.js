export const posts = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'DELETE':
            return posts;
        default:
            return posts;
    }
}
