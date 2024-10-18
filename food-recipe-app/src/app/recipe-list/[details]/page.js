import RecipeItemDetails from "@/components/recipe-item-details";

const fetchRecipeDetails = async (currentRecipeId) => {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await apiResponse.json();

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export default async function RecipeDetails({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  return <RecipeItemDetails getRecipeDetails={getRecipeDetails} />
}
