


const ImageContainer = (props) => {

    return (
        <div className={`w-80 h-96 sm:w-48 sm:h-64 bg-white overflow-hidden rounded-lg bg-center bg-cover`} style={{ backgroundImage: `url(${props.img})` }}        >
            <div className="p-2 bg-white ">
                <h1>Name:  {props.name}</h1>
                <h2>Collection: {props.collection}</h2>
                <h3>Author: {props.author}</h3>
            </div>
        </div>);
}

export default ImageContainer;