import RecipeList from "@/components/recipe-list";

const  fetchListOfRecipes = async () => {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const data = await apiResponse.json();

        return data?.recipes
        
    } catch (e) {
        throw new Error(e)
    }
}

export default async function Recipes() {

    const recipeList = await fetchListOfRecipes();

    return <RecipeList recipeList ={recipeList}/>
}