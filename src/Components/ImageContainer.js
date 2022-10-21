


const ImageContainer = () => {

    const [title, collection, author] = ['', '', '']

    return (
        <div className='w-80 h-96 sm:w-48 sm:h-64 bg-white rounded-lg'>
            <h1>Name:  {title}</h1>
            <h2>Collections: {collection}</h2>
            <h3>Authors: {author}</h3>
        </div>);
}

export default ImageContainer;