const Button = (props) => {
    return (
        <button type="submit" className="
        w-full
        px-6
        py-2.5
        bg-[#fca311]
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-[#fdb422] hover:shadow-lg
        focus:bg-[#fca311]focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-[#eb9200] active:shadow-lg
        transition
        duration-150
        ease-in-out" id={props.id} onClick={props.onClick}>Submit</button>
    );
}

export default Button;
