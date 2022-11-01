const Input = (props) => {
    return (
        <input type={props.type} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id={props.id}
            onChange={props.onChange}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
        />
    );
}

export default Input;