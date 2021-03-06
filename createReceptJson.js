'use strict'
        let baseFile = [
    {
        "title_ua": "Еспресо",
        "title_en": "Espresso",
        "recipe": [
            {
                "name": "Еспресо",
                "class_name": "coffee",
                "volume": 1
            }
        ]
    },
    {
        "title_ua": "Допіо",
        "title_en": "Doppio",
        "recipe": [
            {
                "name": "Еспресо",
                "class_name": "coffee",
                "volume": 2
            }
        ]
    },
    {
        "title_ua": "Тріпло",
        "title_en": "Tripplo",
        "recipe": [
            {
                "name": "Еспресо",
                "class_name": "coffee",
                "volume": 3
            }
        ]
    },
    {
        "title_ua": "Ристрето",
        "title_en": "Ritretto",
        "recipe": [
            {
                "name": "Еспресо",
                "class_name": "doublecoffee",
                "volume": 0.5
            }
        ]
    },
    {
        "title_ua": "Лунго",
        "title_en": "Lungo",
        "recipe": [
            {
                "name": "Еспресо",
                "class_name": "coffee",
                "volume": 1
            }
        ]
    },
    {
        "title_ua": "Американо",
        "title_en": "Americano",
        "recipe": [
            {
                "name": "Еспресо",
                "class_name": "coffee",
                "volume": 1
            },
            {
                "name": "Вода",
                "class_name": "water",
                "volume": 3
            }
        ]
    },
    {
        "title_ua": "Флет Вайт",
        "title_en": "Flat White",
        "recipe": [
            {
                "name": "Еспресо",
                "class_name": "coffee",
                "volume": 1
            },
            {
                "name": "Молоко",
                "class_name": "milk",
                "volume": 2
            }
        ]
    },
    {
        "title_ua": "Капучіно",
        "title_en": "Cappuchino",
        "recipe": [
            {
                "name": "Еспресо",
                "class_name": "coffee",
                "volume": 1
            },
            {
                "name": "Молоко",
                "class_name": "milk",
                "volume": 1
            },
            {
                "name": "Молочна піна",
                "class_name": "milkfoam",
                "volume": 2
            }
        ]
    }
];

sessionStorage.setItem('receptCoffeeDrinks', JSON.stringify(baseFile));