export function getFreshIngredientCount(freshnessList: string[], ingredientList: string[]): number{
    return ingredientList.reduce((sum, ingredient) => {
        const ingredientNum = parseInt(ingredient);
        const isFresh = checkIsfresh(freshnessList, ingredientNum);
        return isFresh ? sum + 1 : sum;
    },0);
}

export function checkIsfresh(freshnessList: string[], ingredient: number): boolean {

    const isInfreshRange = freshnessList.reduce((isCertifiedFresh, input) => {
        const [intStart, intEnd] = input.split("-").map(Number);

        if(ingredient >= intStart && ingredient <= intEnd){
            isCertifiedFresh = true;
        }

        return isCertifiedFresh;

    }, false);
    return isInfreshRange;
}