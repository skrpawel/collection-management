const Tag = (props) => {
    return (
        <>
            <p className="bg-black rounded-lg w-min px-2 py-1 hover:bg-white hover:text-black">{props.children}</p>
        </>
    );
}

export default Tag;