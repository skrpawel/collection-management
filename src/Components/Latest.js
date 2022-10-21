import ImageContainer from "./ImageContainer";
// import { useSelector } from 'react-redux';
const Latest = (props) => {

    // const posts = useSelector(state => state.posts);

    return (<div className='min-w-full max-w-lg'>
        <h1 className='text-white py-5 text-xl text-left font-bold uppercase border-t-2 border-white'>{props.title}</h1>
        <div className='flex flex-wrap justify-center items-center gap-8 pt-8'>
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
        </div>
    </div>);
}

export default Latest;