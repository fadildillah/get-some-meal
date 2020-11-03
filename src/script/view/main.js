import "../component/meal-list.js";
import "../component/app-navbar.js";
import DataFetch from "../data/data-fetch.js";

const main = () => {
    const searchElement = document.querySelector("app-navbar");
    const mealListElement = document.querySelector("meal-list");

    const onSearchClick = () => {
        DataFetch.searchMeal(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    }

    const renderResult = (results) => {
        mealListElement.meals = results;
    };

    const fallbackResult = (message) => {
        mealListElement.renderError(message);
    };

    searchElement.clickEvent = onSearchClick;
};

export default main;