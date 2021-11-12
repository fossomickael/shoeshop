import { GET_ITEM } from "./types";


const allitems = [{id:1,title:'Fall Limited Edition Sneakers', desc: "These low profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll whistand everything the weather can offer", price:250}]


export const searchItem = (id) =>  {
    return {
        type: GET_ITEM,
        payload: allitems.find( item =>  item.id === id)
      };
};