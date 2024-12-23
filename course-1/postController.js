// Using ES module:

const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'}
];

// export const getPosts = () => posts; // can be done like this or...


// like this:

const getPosts = () => posts;
// export { getPosts }; 

// if there is only one thing being exported from a file, usually it is done by exporting it as default:

export default getPosts;

// also, you can have one thing exported as default while other functions are exported normally:

export const getPostsLenght = () => posts.length;
