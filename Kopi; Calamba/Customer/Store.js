const KopiStore = (() => {
  const CART_KEY = "kopiCart";
  const CHECKOUT_KEY = "kopiCheckout";
  const ADDRESS_KEY = "kopiAddress";

  const products = [
    {
        "id": "kopi",
        "name": "Kopi;",
        "label": "Kopi;",
        "products": [
            {
                "id": "americano",
                "name": "Americano",
                "image": "menu/Kopi1.png",
                "description": "Bold black coffee with a smooth espresso finish.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 100,
                    "16oz": 110
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "caramel-macchiato",
                "name": "Caramel Macchiato",
                "image": "menu/Kopi2.png",
                "description": "A smooth blend of vanilla syrup and steamed milk, topped with rich espresso and caramel drizzle.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 110,
                    "16oz": 120
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "spanish-latte",
                "name": "Spanish Latte",
                "image": "menu/Kopi3.png",
                "description": "Creamy espresso latte sweetened with a balanced Spanish-style finish.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 110,
                    "16oz": 120
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "dirty-matcha",
                "name": "Dirty Matcha",
                "image": "menu/Kopi4.png",
                "description": "Earthy matcha layered with espresso and milk.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 120,
                    "16oz": 120
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "dark-mocha",
                "name": "Dark Mocha",
                "image": "menu/Kopi5.png",
                "description": "Dark chocolate and espresso with a creamy coffee base.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 110,
                    "16oz": 120
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "white-choco-mocha",
                "name": "White Choco Mocha",
                "image": "menu/Kopi6.png",
                "description": "A creamy blend of white chocolate and espresso with smooth steamed milk.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 110,
                    "16oz": 120
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "cafe-latte",
                "name": "Cafe Latte",
                "image": "menu/Kopi7.png",
                "description": "Rich espresso combined with velvety steamed milk for a smooth, classic taste.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 100,
                    "16oz": 110
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "nutella-latte",
                "name": "Nutella Latte",
                "image": "menu/Kopi8.png",
                "description": "Nutella with smooth espresso and milk.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 110,
                    "16oz": 120
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "salted-caramel",
                "name": "Salted Caramel",
                "image": "menu/Kopi9.png",
                "description": "Caramel latte with a gentle salted finish.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 120,
                    "16oz": 130
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "sea-salt-latte",
                "name": "Sea Salt Latte",
                "image": "menu/Kopi10.png",
                "description": "Smooth espresso and creamy milk topped with a light, savory sea salt cream.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 120,
                    "16oz": 130
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "kopi-special",
                "name": "Kopi; Special",
                "image": "menu/Kopi11.png",
                "description": "Our signature house blend featuring rich espresso, creamy milk, and a uniquely satisfying flavor.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 95,
                    "16oz": 105
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            }
        ]
    },
    {
        "id": "non-kopi",
        "name": "Non-Kopi;",
        "label": "Non-Kopi;",
        "products": [
            {
                "id": "milky-chocolate",
                "name": "Milky Chocolate",
                "image": "menu/NonKopi1.png",
                "description": "Rich chocolate blended with creamy milk for a smooth, indulgent treat.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 100,
                    "16oz": 110
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "matcha-latte",
                "name": "Matcha Latte",
                "image": "menu/NonKopi2.png",
                "description": "Smooth matcha and milk with a clean green tea finish.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 110,
                    "16oz": 120
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "strawberry-oreo",
                "name": "Strawberry Oreo",
                "image": "menu/NonKopi3.png",
                "description": "Sweet strawberry and crunchy Oreo blended into a creamy, refreshing drink.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 110,
                    "16oz": 120
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "sea-salt-matcha",
                "name": "Sea Salt Matcha",
                "image": "menu/NonKopi4.png",
                "description": "A creamy milk-based drink topped with a smooth, lightly salted cream and matcha.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 115,
                    "16oz": 125
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "chocolate-matcha",
                "name": "Chocolate Matcha",
                "image": "menu/NonKopi5.png",
                "description": "A delightful blend of rich chocolate and smooth matcha.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 110,
                    "16oz": 120
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "milky-oreo",
                "name": "Milky Oreo",
                "image": "menu/NonKopi6.png",
                "description": "Creamy milk blended with crushed Oreo cookies for a rich and satisfying flavor.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 105,
                    "16oz": 115
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "milky-strawberry",
                "name": "Milky Strawberry",
                "image": "menu/NonKopi6.png",
                "description": "Fresh strawberry flavor blended with creamy milk for a sweet, refreshing taste.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 100,
                    "16oz": 110
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            }
        ]
    },
    {
        "id": "fruit-soda-tea-series",
        "name": "Fruit Soda and Tea Series",
        "label": "Fruit Soda and Tea Series",
        "products": [
            {
                "id": "hibiscus-tea-with-strawberry",
                "name": "Hibiscus Tea with Strawberry popping bobba",
                "image": "menu/Hibiscus_tea.png",
                "description": "A refreshing blend of floral hibiscus tea, sweet strawberry, and popping bobba for a fruity burst in every sip.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "12oz": 90,
                    "16oz": 100
                },
                "options": [
                    {
                        "key": "temperature",
                        "label": "Temperature",
                        "values": [
                            "Hot",
                            "Iced"
                        ],
                        "defaultValue": "Iced",
                        "priceKey": false
                    },
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "12oz",
                            "16oz"
                        ],
                        "defaultValue": "12oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Less Ice",
                        "priceKey": false
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "green-apple",
                "name": "Green Apple",
                "image": "menu/FruitSoda1.png",
                "description": "Crisp green apple flavor with sparkling soda for a refreshing fizz.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 110
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Normal Ice",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "blueberry",
                "name": "Blueberry",
                "image": "menu/FruitSoda2.png",
                "description": "Sweet blueberry blended with sparkling soda for a fruity, bubbly refreshment.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 110
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Normal Ice",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "lychee",
                "name": "Lychee",
                "image": "menu/FruitSoda3.png",
                "description": "Delicate lychee flavor mixed with sparkling soda for a light and refreshing drink.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 110
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Normal Ice",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "strawberry",
                "name": "Strawberry",
                "image": "menu/FruitSoda4.png",
                "description": "Sweet strawberry flavor combined with sparkling soda for a fruity, fizzy delight.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 110
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "ice",
                        "label": "Ice Level",
                        "values": [
                            "Normal Ice",
                            "Less Ice"
                        ],
                        "defaultValue": "Normal Ice",
                        "priceKey": false
                    }
                ]
            }
        ]
    },
    {
        "id": "cream-based",
        "name": "Cream Based",
        "label": "Frappe",
        "products": [
            {
                "id": "nutty-choco",
                "name": "Nutty Choco",
                "image": "menu/CreamB1.png",
                "description": "A creamy blend of rich chocolate and nutty flavors, perfectly blended with ice.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 140
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "triple-white-chocolate",
                "name": "Triple White Chocolate",
                "image": "menu/CreamB2.png",
                "description": "Smooth white chocolate blended into a rich, creamy frappe.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 150
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "matcha-cream",
                "name": "Matcha Cream",
                "image": "menu/CreamB3.png",
                "description": "Premium matcha blended with creamy milk for a smooth and refreshing treat.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 140
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "triple-chocolate",
                "name": "Triple Chocolate",
                "image": "menu/CreamB4.png",
                "description": "A rich blend of chocolatey flavor, perfectly creamy and indulgent.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 150
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "cookies-n-cream",
                "name": "Cookies n' Cream",
                "image": "menu/CreamB5.png",
                "description": "Creamy vanilla blended with crushed cookies for a classic favorite.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 140
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "strawberry-n-cream",
                "name": "Strawberry n' Cream",
                "image": "menu/CreamB6.png",
                "description": "Sweet strawberry blended with creamy milk for a refreshing frappe.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 150
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "biscoff-n-cream",
                "name": "Biscoff n' Cream",
                "image": "menu/CreamB7.png",
                "description": "Creamy milk blended with caramelized Biscoff cookies for a rich, spiced flavor.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 150
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            }
        ]
    },
    {
        "id": "coffee-based",
        "name": "Coffee Based",
        "label": "Coffee Based",
        "products": [
            {
                "id": "triple-mocha",
                "name": "Triple Mocha",
                "image": "menu/CoffeeB1.png",
                "description": "A rich blend of espresso and three layers of chocolate, perfectly blended with ice.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 160
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "mocha-frappe",
                "name": "Mocha Frappe",
                "image": "menu/CoffeeB2.png",
                "description": "Bold espresso and rich chocolate blended into a smooth, icy treat.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 160
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "caramel-frappe",
                "name": "Caramel Frappe",
                "image": "menu/CoffeeB3.png",
                "description": "Smooth espresso blended with sweet caramel and creamy milk.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 160
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "dark-mochaccino",
                "name": "Dark Mochaccino",
                "image": "menu/CoffeeB4.png",
                "description": "Bold espresso and dark chocolate blended for a rich, intense flavor.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 160
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            },
            {
                "id": "white-mocha-frappe",
                "name": "White Mocha Frappe",
                "image": "menu/CoffeeB5.png",
                "description": "Espresso blended with creamy white chocolate for a smooth and indulgent finish.",
                "type": "drink",
                "customizable": true,
                "prices": {
                    "16oz": 160
                },
                "options": [
                    {
                        "key": "size",
                        "label": "Size",
                        "values": [
                            "16oz"
                        ],
                        "defaultValue": "16oz",
                        "priceKey": true
                    },
                    {
                        "key": "sugar",
                        "label": "Sugar Level",
                        "values": [
                            "Normal Sugar",
                            "Less Sugar"
                        ],
                        "defaultValue": "Normal Sugar",
                        "priceKey": false
                    }
                ]
            }
        ]
    },
    {
        "id": "rice-meals",
        "name": "Rice Meals",
        "label": "Rice Meals",
        "products": [
            {
                "id": "bangus",
                "name": "Bangus",
                "image": "menu/RiceM1.png",
                "description": "Bangus, garlic rice, and egg.",
                "type": "food",
                "customizable": true,
                "prices": {
                    "Regular": 189
                },
                "options": []
            },
            {
                "id": "liempo",
                "name": "Liempo",
                "image": "menu/RiceM2.png",
                "description": "Liempo, garlic rice, and egg.",
                "type": "food",
                "customizable": true,
                "prices": {
                    "Regular": 169
                },
                "options": []
            },
            {
                "id": "tapa",
                "name": "Tapa",
                "image": "menu/RiceM3.png",
                "description": "Tapa, garlic rice, and egg.",
                "type": "food",
                "customizable": true,
                "prices": {
                    "Regular": 179
                },
                "options": []
            },
            {
                "id": "hungarian-sausage",
                "name": "Hungarian Sausage",
                "image": "menu/RiceM4.png",
                "description": "Hungarian sausage, garlic rice, and egg.",
                "type": "food",
                "customizable": true,
                "prices": {
                    "Regular": 169
                },
                "options": []
            }
        ]
    },
    {
        "id": "chicken-meals",
        "name": "Chicken Meals",
        "label": "Chicken Meals",
        "products": [
            {
                "id": "chicken-wings",
                "name": "Chicken Wings",
                "image": "menu/ChickenM1.png",
                "description": "Crispy, juicy chicken wings tossed in your favorite flavorful sauce.",
                "type": "food",
                "customizable": true,
                "prices": {
                    "6pcs": 190,
                    "12pcs": 370
                },
                "options": [
                    {
                        "key": "flavor",
                        "label": "Flavors",
                        "values": [
                            "Sweet Chili",
                            "Spicy",
                            "Garlic Parmesan"
                        ],
                        "defaultValue": "Sweet Chili",
                        "priceKey": false
                    },
                    {
                        "key": "pieces",
                        "label": "Pieces",
                        "values": [
                            "6pcs",
                            "12pcs"
                        ],
                        "defaultValue": "12pcs",
                        "priceKey": true
                    }
                ]
            },
            {
                "id": "chicken-fingers-with-fries",
                "name": "Chicken Fingers with Fries",
                "image": "menu/ChickenM2.png",
                "description": "Crispy chicken tenders served with golden, seasoned fries for a satisfying meal.",
                "type": "food",
                "customizable": true,
                "prices": {
                    "Regular": 195
                },
                "options": [
                    {
                        "key": "flavor",
                        "label": "Flavors",
                        "values": [
                            "Sweet Chili",
                            "Spicy",
                            "Garlic Parmesan"
                        ],
                        "defaultValue": "Sweet Chili",
                        "priceKey": false
                    }
                ]
            }
        ]
    },
    {
        "id": "snacks",
        "name": "Snacks",
        "label": "Snacks",
        "products": [
            {
                "id": "beef-quesadilla",
                "name": "Beef Quesadilla",
                "image": "menu/Snack1.png",
                "description": "Seasoned beef and melted cheese folded in a toasted tortilla.",
                "type": "food",
                "customizable": true,
                "prices": {
                    "Regular": 155
                },
                "options": []
            },
            {
                "id": "cheese-quesadilla",
                "name": "Cheese Quesadilla",
                "image": "menu/Snack2.png",
                "description": "Melted cheese wrapped in a warm, toasted tortilla for a simple classic.",
                "type": "food",
                "customizable": true,
                "prices": {
                    "Regular": 145
                },
                "options": []
            },
            {
                "id": "nachos",
                "name": "Nachos",
                "image": "menu/Snack3.png",
                "description": "Crispy nachos topped with rich, creamy cheese sauce.",
                "type": "food",
                "customizable": true,
                "prices": {
                    "Regular": 155
                },
                "options": []
            },
            {
                "id": "cheesy-fries",
                "name": "Cheesy Fries",
                "image": "menu/Snack4.png",
                "description": "Golden fries topped with creamy cheese sauce.",
                "type": "food",
                "customizable": true,
                "prices": {
                    "Regular": 145
                },
                "options": []
            }
        ]
    }
];

  function allProducts() {
    return products.flatMap(category => category.products.map(product => ({ ...product, category: category.name })));
  }

  function findProduct(id) {
    return allProducts().find(product => product.id === id);
  }

  function read(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch {
      return fallback;
    }
  }

  function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getCart() {
    return read(CART_KEY, []);
  }

  function saveCart(cart) {
    write(CART_KEY, cart);
    updateCartCount();
  }

  function addToCart(itemData) {
    const cart = getCart();
    const existing = cart.find(item => sameOrder(item, itemData));

    if (existing) {
      existing.quantity += itemData.quantity;
    } else {
      cart.push({ ...itemData, cartId: Date.now().toString(36) + Math.random().toString(36).slice(2, 8) });
    }

    saveCart(cart);
  }

  function sameOrder(a, b) {
    return a.productId === b.productId &&
      JSON.stringify(a.options || {}) === JSON.stringify(b.options || {});
  }

  function updateCartItem(cartId, data) {
    const cart = getCart().map(item => item.cartId === cartId ? { ...item, ...data } : item);
    saveCart(cart);
  }

  function deleteCartItem(cartId) {
    saveCart(getCart().filter(item => item.cartId !== cartId));
  }

  function clearCart() {
    saveCart([]);
  }

  function cartTotal(cart = getCart()) {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function cartCount(cart = getCart()) {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  function updateCartCount() {
    document.querySelectorAll("[data-cart-count]").forEach(count => {
      count.textContent = cartCount();
    });
  }

  function setCheckout(items) {
    write(CHECKOUT_KEY, items);
  }

  function getCheckout() {
    const raw = localStorage.getItem(CHECKOUT_KEY);
    if (raw !== null) {
      return read(CHECKOUT_KEY, []);
    }
    return getCart();
  }

  function getAddress() {
    return localStorage.getItem(ADDRESS_KEY) || "Lingga, Calamba City";
  }

  function setAddress(address) {
    localStorage.setItem(ADDRESS_KEY, address);
  }

  return {
    products,
    allProducts,
    findProduct,
    getCart,
    saveCart,
    addToCart,
    updateCartItem,
    deleteCartItem,
    clearCart,
    cartTotal,
    cartCount,
    updateCartCount,
    setCheckout,
    getCheckout,
    getAddress,
    setAddress
  };
})();

document.addEventListener("DOMContentLoaded", KopiStore.updateCartCount);
