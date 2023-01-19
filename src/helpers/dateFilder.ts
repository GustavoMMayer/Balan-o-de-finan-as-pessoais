import {Item} from '../types/Item'

export const getCurrentMonth = ()=>{
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    
    return `${year} - ${month}`
};

export const filterListByMonth = (list: Item[], date:string):Item[] =>{
    let newList: Item[] = [];
    let[ year, month] = date.split('-');

        for(let i in list){
            if( list[i].date.getFullYear() === parseInt(year) &&
                (list[i].date.getMonth() +1) === parseInt(month)){

                    newList.push(list[i]);
            } 
        }

    return newList;

}

export const formatDate = (date:Date):string=>{
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date. getDate();

    const addZeroDate = (n:number): string=>{
        if(n<10){
            return `0${n}`
        }else{
            return `${n}`
        }
    }

    return `${addZeroDate(day)}/${addZeroDate(month)}/${year}`
    

}

export const formatCurrentMonth = (currentMonth:string):string =>{

    let [year, month] = currentMonth.split('-');
    let months=['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${months[parseInt(month)-1]} de ${year}`

}