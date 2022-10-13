import Tag from "./Tag";


const Tags = (props) => {
    return (<div className="text-white w-full">
        <h1 className='py-5 text-xl text-left font-bold uppercase border-t-2 border-white'>{props.title}</h1>
        <div className="flex gap-3">
            <Tag>pets</Tag>
            <Tag>whiskey</Tag>
            <Tag>java</Tag>
            <Tag>ide</Tag>
        </div>
    </div>);
}

export default Tags;