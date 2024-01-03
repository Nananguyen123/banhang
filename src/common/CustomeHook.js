import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url,query =''){

    const[listProduct,setListProduct]= useState([]);
    const [paging,setPaging] = useState({
        page: 1,
        pageSize:6,
        total:50
    })
    const[reload,setReload] = useState(false);

    function reloadData(){
        setReload(!reload)
    }
    url +=`&pagination[pageSize]=${paging.pageSize}&pagination[page]=${paging.page}&${query}`
    useEffect(()=>{
        axios.get(url)

        .then(res=>{
            console.log("du lieu cua toi",res.data.data);
            setListProduct(res?.data?.data)
            setPaging({
                ...res?.data?.meta?.pagination
            })

        }).catch(err=>{
            
    
        })
    },[paging.page,paging.pageSize,url,query,reload])
   
    return [listProduct,setListProduct,paging,setPaging,reload,setReload]
}