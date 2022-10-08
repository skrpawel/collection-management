import ImageContainer from "./ImageContainer";
import { useSelector } from 'react-redux';
const Latest = (props) => {

    const posts = useSelector(state => state.posts);

    return (<div className=''>
        <h1 className='text-white pb-10 text-xl text-left font-bold uppercase'>{props.title}</h1>
        <div className='flex justify-center gap-16 border-t-2 border-white pt-8'>
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
        </div>
    </div>);
}

export default Latest;