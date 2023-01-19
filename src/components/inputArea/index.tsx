import { useState } from 'react'
import { categories } from '../../data/categories'
import { Item } from '../../types/Item'
import { Category } from '../TabelItem/styles'
import * as C from './styles'

type Props={
    onAdd: (item:Item)=>void
}
export const InputArea = ({onAdd}:Props)=>{

    const [date, setDate]= useState('');
    const [category, setCategory]= useState('');
    const [title, setTitle]= useState('');
    const [value, setValue]= useState(0);


    let categoryKeys: string[] = Object.keys(categories)

    const handleAddEvent =()=>{
        let error = [];

        if(date === ''){
            error.push('Data Inválida')
        };
        if(category ===''){
            error.push('Categoria invalida')
        }
        if(title ===''){
            error.push('Digite um titulo')
        }
        if(value === 0){
            error.push("Digite um valor")
        }

       if (error.length === 0){
            let newItem: Item ={
                date: new Date( date),
                category:category,
                title:title,
                value:value
            };
            
            onAdd(newItem)

            clearData();
        }else{
           alert(error.join("\n"));

        }
    }

    const clearData =()=>{
        setDate('');
        setCategory('');
        setTitle('');
        setValue(0)
    }

    return(
        <C.Container>
            <C.InputArea>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input
                    type={'date'}
                    onChange={e => setDate(e.target.value)}
                    value={date}/>

            </C.InputArea>

            <C.InputArea>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Select 
                    onChange={e => setCategory(e.target.value)}
                    value={category}
                 >
                  <>
                  <option></option>
                  {categoryKeys.map((item, index)=>(
                    <option key={index} value={item}>{categories[item].title}</option>
                  ))}
                  </>
                </C.Select>
            </C.InputArea>

            <C.InputArea>
                <C.InputTitle>Titulo</C.InputTitle>
                <C.Input
                    type={'text'}
                    onChange={e => setTitle(e.target.value)}
                    value={title}/>
            </C.InputArea>

            <C.InputArea>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input
                    type={'number'}
                    onChange={e => setValue(parseFloat(e.target.value))}
                    value={value}/>
            </C.InputArea>
            
            <C.InputArea>
                <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
                
            </C.InputArea>        
        </C.Container>
    )
}