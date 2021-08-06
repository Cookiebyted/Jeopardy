function getCategories(numberOfCategories){
    // Parameters = number of categories you want in the game
    // Output = Return the array of categories
    // Function fetches x amount of categories from API
 
    return fetchCategoriesFromAPI(numberOfCategories);
}

function getQuestions(arrayOfCategories){
    // Parameters = Array filled with categories
    // Output = Return an array containing questions for all categories in the input array
    // Function fetches an array containing x amount of questions

    let questionsArray = [];
    for (let i=0; i < arrayOfCategories.length; i++){
        let categoryQuestions = fetchQuestionsFromAPI(arrayOfCategories[i]);
        questionsArray.push(categoryQuestions);
    }

    return questionsArray;
}

let categoriesForGame = getCategories(5);
let questionsForGame = getQuestions(categoriesForGame);
addToGame(categoriesForGame, questionsForGame);