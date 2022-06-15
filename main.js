'use strict';

class Coffee {
    constructor() {
        this.coffeeNames = document.querySelector('.coffeeNames');
        this.coffeeDrink = this.coffeeNames.querySelectorAll('.coffeeDrink');
        this.innerContainer = document.querySelector('.inner');
        this.layer = this.innerContainer.querySelectorAll('.inner>div');
        this.bgColor = { 'coffee': 'rgb(94, 40, 19)', 'milk': 'rgb(232, 235, 199)', 'milkfoam': 'rgb(216, 195, 172)', 'water': 'rgb(140, 184, 201)' };
        this.nameCoffeeDrink = [];
        this.recipeCoffeeDrink = [];
        this.color;

    }

    coffeeDrinks() {
        let data = JSON.parse(sessionStorage.getItem('receptCoffeeDrinks'));
        console.dir(data);
        data.forEach((elem) => {
            this.nameCoffeeDrink.push(elem.title_ua);
        });
        console.dir(this.nameCoffeeDrink);
    }

    createListCoffeeDrinks() {
        this.nameCoffeeDrink.forEach((elem) => {
            this.coffeeNames.lastElementChild.insertAdjacentHTML('afterEnd', `<div class="coffeeDrink"> ${elem} </div>`);
        })
        this.coffeeDrink = this.coffeeNames.querySelectorAll('.coffeeDrink');
    }

    recipe() {
        let data = JSON.parse(sessionStorage.getItem('receptCoffeeDrinks'));
        for (let i = 0; i < data.length; i++) {
            this.recipeCoffeeDrink[i] = data[i].recipe;
        }
        console.dir(data);
        console.dir(data[0].recipe);
        console.dir(this.recipeCoffeeDrink);
    }

    events() {
        this.coffeeNames.addEventListener('click', (even) => {
            let target = even.target;
            let currentRecept;

            for (let i = 0; i < this.nameCoffeeDrink.length; i++) {
                if (target.innerText == this.nameCoffeeDrink[i]) {
                    console.dir(target.textContent);
                    currentRecept = this.recipeCoffeeDrink[i];
                }
            }
            this.hideAllLayer();

            if (currentRecept.length == 1) { //проверка на 1 материал
                if (currentRecept[0].volume == 1) {
                    this.layer[3].classList.remove('hide');
                    let material = currentRecept[0].class_name;
                    let color = this.proverka(material);
                    this.layer[3].style.backgroundColor = color;
                } else if (currentRecept[0].volume == 0.5) {
                    this.layer[3].classList.remove('hide');
                    let material = currentRecept[0].class_name;
                    let color = this.proverka(material);
                    this.layer[3].style.backgroundColor = color;
                    this.layer[3].style.top = 257 + 'px';
                }
                else if (String(currentRecept[0].volume) == "2") {
                    this.layer[3].classList.remove('hide');
                    this.layer[2].classList.remove('hide');
                    for (let i = 0; i < 2; i++) {
                        let material = currentRecept[0].class_name;
                        let color = this.proverka(material);
                        this.layer[3 - i].style.backgroundColor = color;
                    }
                }
                else if (String(currentRecept[0].volume) == "3") {
                    this.layer[3].classList.remove('hide');
                    this.layer[2].classList.remove('hide');
                    this.layer[1].classList.remove('hide');
                    for (let i = 0; i < 3; i++) {
                        let material = currentRecept[0].class_name;
                        let color = this.proverka(material);
                        this.layer[3 - i].style.backgroundColor = color;
                    }
                }

            } else if (currentRecept.length == 2) { // 2 материала
                if (currentRecept[0].volume == 1 && currentRecept[1].volume == 1) {
                    this.layer[3].classList.remove('hide');
                    this.layer[2].classList.remove('hide');
                    for (let i = 0; i < currentRecept.length; i++) {
                        let material = [];
                        material[i] = currentRecept[i].class_name;
                        let color = [];
                        color[i] = this.proverka(material[i]);
                        this.layer[3 - i].style.backgroundColor = color[i];
                    }
                }
                else if (currentRecept[0].volume == 1 && currentRecept[1].volume == 2) {
                    this.layer[3].classList.remove('hide');
                    this.layer[2].classList.remove('hide');
                    this.layer[1].classList.remove('hide');

                    this.layer[3].classList.remove('hide');
                    let material = currentRecept[0].class_name;
                    let color = this.proverka(material);
                    this.layer[3].style.backgroundColor = color;

                    for (let i = 0; i < 2; i++) {
                        let material = currentRecept[1].class_name;
                        let color = this.proverka(material);
                        this.layer[2 - i].style.backgroundColor = color;
                    }
                }
                else if (currentRecept[0].volume == 1 && currentRecept[1].volume == 3) {
                    this.layer.forEach(elem => elem.classList.remove('hide'));

                    this.layer[3].classList.remove('hide');
                    let material = currentRecept[0].class_name;
                    let color = this.proverka(material);
                    this.layer[3].style.backgroundColor = color;

                    for (let i = 0; i < 3; i++) {
                        material = currentRecept[1].class_name;
                        color = this.proverka(material);
                        this.layer[2 - i].style.backgroundColor = color;
                    }
                }
            }
            else if (currentRecept.length == 3) { // 3 материала
                if (currentRecept[0].volume == 1 && currentRecept[1].volume == 1 && currentRecept[2].volume == 1) {
                    this.layer[3].classList.remove('hide');
                    this.layer[2].classList.remove('hide');
                    this.layer[1].classList.remove('hide');
                    for (let i = 0; i < 3; i++) {
                        let material = [];
                        material[i] = currentRecept[i].class_name;
                        let color = [];
                        color[i] = this.proverka(material[i]);
                        this.layer[3 - i].style.backgroundColor = color[i];
                    }
                }

                else if (currentRecept[0].volume == 1 && currentRecept[1].volume == 1 && currentRecept[2].volume == 2) {
                    this.layer.forEach(elem => elem.classList.remove('hide'));

                    let material = currentRecept[0].class_name;
                    let color = this.proverka(material);
                    this.layer[3].style.backgroundColor = color;
                    material = currentRecept[1].class_name;
                    color = this.proverka(material);
                    this.layer[2].style.backgroundColor = color;

                    for (let i = 0; i < 2; i++) {
                        let material = currentRecept[2].class_name;
                        let color = this.proverka(material);
                        this.layer[1 - i].style.backgroundColor = color;
                    }
                }
                else if (currentRecept[0].volume == 1 && currentRecept[1].volume == 2 && currentRecept[2].volume == 1) {
                    this.layer.forEach(elem => elem.classList.remove('hide'));

                    let material = currentRecept[0].class_name;
                    let color = this.proverka(material);
                    this.layer[3].style.backgroundColor = color;
                    material = currentRecept[2].class_name;
                    color = this.proverka(material);
                    this.layer[0].style.backgroundColor = color;

                    for (let i = 1; i < 3; i++) {
                        let material = currentRecept[1].class_name;
                        let color = this.proverka(material);
                        this.layer[i].style.backgroundColor = color;
                    }
                }
            }
        });
    }

    proverka(material) {
        let color;
        if (material == 'coffee') {
            color = this.bgColor.coffee;
        } else if (material == 'milk') {
            color = this.bgColor.milk;
        } else if (material == 'milkfoam') {
            color = this.bgColor.milkfoam;
        } else if (material == 'water') {
            color = this.bgColor.water;
        }
        return color
    }

    workWithTwoDifferentComponents(currentRecept) {
        this.layer[3].classList.remove('hide');
        this.layer[2].classList.remove('hide');

        for (let i = 0; i < currentRecept.length; i++) {
            let material = [];
            material[i] = currentRecept[i].class_name;
            let color = [];
            color[i] = this.proverka(material[i]);
            this.layer[3 - i].style.backgroundColor = color[i];
        }
    }

    workWithTwoSameComponents(currentRecept) {
        this.layer[3].classList.remove('hide');
        this.layer[2].classList.remove('hide');
        for (let i = 0; i < 2; i++) {
            let material = currentRecept[0].class_name;
            let color = this.proverka(material);
            this.layer[3 - i].style.backgroundColor = color;
        }
    }
    hideAllLayer() {
        this.layer.forEach((elem) => {
            elem.classList.add('hide');
        })
        this.layer[3].style.top = 227 + 'px';
    }

    init() {
        console.dir(this.coffeeDrink);
        console.dir(this.coffeeNames);
        this.hideAllLayer();
        this.coffeeDrinks();
        this.createListCoffeeDrinks();
        this.recipe();
        this.events();
    }
}
