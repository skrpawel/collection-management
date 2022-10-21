
const def = '782012';

const Button = (props) => {

  return (
    < button type="submit" className={`w-full
    full
    px-6
    py-2.5
    bg-[#fdb422]
  text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-[#fdb422] hover:
    focus:bg-[#fca311] focus: 
    focus:outline-none 
    focus:ring-0
    active:bg-[#eb9200] 
    active:transition 
    duration-150
    ease-in-out`} id={props.id} onClick={props.onClick} > {props.children}</button>
  );
}

export default Button;
