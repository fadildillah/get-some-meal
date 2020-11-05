import imgLogo from '../../assets/meal.png';

class AppNavbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand d-inline-block align-top ml-sm-5" href="#">
                <img src="${imgLogo}" alt="Meal">
                <span class="h5 font-weight-bold">Get Some Meal</span>
            </a>
            <div id="search-container" class="form-inline">
                <input type="search" id="searchElement" class="form-control mr-sm-2" placeholder="get your meal...">
                <button id="searchButtonElement" class="btn btn-dark my-2 my-sm-0 mr-sm-5" type="submit">Search</button>
            </div>
        </nav>
        `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("app-navbar", AppNavbar);