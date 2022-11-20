import { useState } from "react"

export const AddCategory = ({onNewCategory}) =>{

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( inputValue.trim().length<=1) return;
        // setCategories(cat=>[inputValue, ...cat]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
        <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        />
        </form>
    )
}