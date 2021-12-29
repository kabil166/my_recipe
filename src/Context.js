// import React from 'react'
// import axios from 'axios'
// export  const FoodRecipes = React.createContext();
// const Context=({children}) => {
//     const [data, setData] = React.useState();
//     React.useEffect(()=>{
//         axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=64cc40ad&app_key=fd9510e3ecaacebb917f36abe6a835c1`)
//         .then(response=>setData(response.data))
//         .catch(error=>console.log(error))
//     });
//     console.log(data);
//     return (
//         <FoodRecipes.Provider value={{ data }}>
//             {children}
//         </FoodRecipes.Provider>
//     )
// }

// export default Context

