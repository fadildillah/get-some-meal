class MealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="card bg-light mb-3">
                <img class="card-img-top img-fluid" src="${this._meal.strMealThumb}" alt="Meal Image">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">${this._meal.strMeal}</h5>
                    <p class="card-text">Base Country: <span class="font-weight-bold">${this._meal.strArea}</span></p>
                </div>
            </div>
        `;
    }
}

customElements.define("meal-item", MealItem);