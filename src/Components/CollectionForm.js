import Button from './Button';
import Input from "./Input";
import MDEditor from '@uiw/react-md-editor';
import Select from 'react-select'

const CollectionForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div className="form-group mb-6">
            <label htmlFor="inputName" className="form-label inline-block mb-2 text-white">Name of collection</label>
            <Input type='text' placeholder='Enter name of collection' id='inputName' value={props.nameValue} onChange={props.nameChange} />
        </div>
        <div className="form-group mb-6">
            <MDEditor
                value={props.descriptionValue}
                onChange={props.descriptionChange}
            />
        </div>
        <div className="form-group mb-6">
            <label htmlFor="inputTopic" className="form-label inline-block mb-2 text-white">Topic</label>
            <Select options={props.selectOptions} onChange={props.selectChange} defaultValue={props.selectValue} />
        </div>

        <div className="form-group mb-6">
            <label htmlFor="inputImg" className="form-label inline-block mb-2 text-white">Select image</label>
            <Input type='file' placeholder='Image' id='inputImg' name='img' onChange={props.imgChange} />
        </div>

        <Button type='submit'>{props.buttonText}</Button>
    </form>);
}

export default CollectionForm;