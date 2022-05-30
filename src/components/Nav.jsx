import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { fetchCategories } from "../api/Api";
import { categoriesAtom, categoryNameAtom, loadingAtom, parentCateAtom } from "../atoms";

export default function Nav(){
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  const [parentCate, setParentCate] = useRecoilState(parentCateAtom)
  const [cateName , setCateName] = useRecoilState(categoryNameAtom);
  let new_cate = [{
    id :1,
    name:'furniture',
    list:[],
  },
  {
    id :2,
    name:'lighting',
    list:[],
  },
  {
    id :3,
    name:'homedeco',
    list:[],
  }
];
  useEffect(()=>{
    fetchCategories().then(data=>setCategories(data))
    setLoading(false);
    return ()=> setCategories([]);
  },[]);

  useEffect(()=>{
    const parentCate =  categories.filter((category) => {return category.parent_id === null});
    setParentCate(parentCate);

  },[categories])
 
  useEffect(()=>{
    
    for(let i=0; i < categories.length; i ++){
      switch(categories[i].parent_id){
        case 1 : 
        new_cate[0].list.push(categories[i]);
        break;
        case 2 :
          new_cate[1].list.push(categories[i]); 
          break;
        case 3: 
          new_cate[2].list.push(categories[i]);
          break;
        default: console.log(new_cate)
      }
    }
  },[categories]);


  function categoryClick(e){
    setCateName(e.target.textContent)
  }


  return (
    <ul className="categories">
      {!loading && 
        // parentCate.map((category) =>(
        //   <li key={category.id} onClick={categoryClick}>
        //     <Link to="/categories">{category.name}</Link>
        //   </li>
        // ))
        new_cate.map((category)=>(
          <li key={category.id}>{category.name}
          <ul>
            {category.list.map((list)=>(
              console.log(list)
              // <li key={list.id}>{list.name}</li>
            ))}
          </ul>
          </li>
        ))
      }
    </ul>
  )
    
}