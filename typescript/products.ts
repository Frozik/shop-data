enum Gender {
    Man = 1,
    Woman,
    Unisex,
}

interface IProduct {
    readonly id: number;
    readonly categoryId: number;
    readonly image: string;
    readonly name: string;
    readonly description: string;
    readonly cost: number;
    readonly rating: number;
    readonly gender: Gender;
    readonly count: number;
    readonly soldCount: number;
}

const sourceProducts: IProduct[] = [
    {
        id: 0,
        categoryId: 0,
        image: 'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Active wear Lorem Ipsum 1',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed libero enim, sollicitudin a elit vel, dapibus pellentesque nunc.
Phasellus ac rutrum massa.
Vivamus non nulla lobortis augue ullamcorper congue.`,
        cost: 47.78,
        rating: 4,
        gender: Gender.Man,
        count: 50,
        soldCount: 50,
    },
    {
        id: 1,
        categoryId: 0,
        image: 'https://images.pexels.com/photos/285171/pexels-photo-285171.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Active wear Lorem Ipsum 2',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed libero enim, sollicitudin a elit vel, dapibus pellentesque nunc.
Phasellus ac rutrum massa.
Vivamus non nulla lobortis augue ullamcorper congue.`,
        cost: 53.99,
        rating: 3,
        gender: Gender.Man,
        count: 10,
        soldCount: 0,
    },
    {
        id: 2,
        categoryId: 0,
        image: 'https://images.pexels.com/photos/26549/pexels-photo-26549.jpg?h=350&auto=compress&cs=tinysrgb',
        name: 'Active wear Lorem Ipsum 3',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 41.49,
        rating: 5,
        gender: Gender.Unisex,
        count: 20,
        soldCount: 0,
    },
    {
        id: 3,
        categoryId: 0,
        image: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Active wear Lorem Ipsum 4',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 37.99,
        rating: 0,
        gender: Gender.Woman,
        count: 5,
        soldCount: 0,
    },
    {
        id: 4,
        categoryId: 0,
        image: 'https://images.pexels.com/photos/47401/pexels-photo-47401.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Active wear Lorem Ipsum 5',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 24.99,
        rating: 2,
        gender: Gender.Woman,
        count: 0,
        soldCount: 0,
    },
    {
        id: 10,
        categoryId: 1,
        image: 'https://images.pexels.com/photos/25641/pexels-photo-25641.jpg?h=350&auto=compress&cs=tinysrgb',
        name: 'Jeans Lorem Ipsum 1',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed libero enim, sollicitudin a elit vel, dapibus pellentesque nunc.
Phasellus ac rutrum massa.
Vivamus non nulla lobortis augue ullamcorper congue.`,
        cost: 117.99,
        rating: 4,
        gender: Gender.Man,
        count: 10,
        soldCount: 0,
    },
    {
        id: 11,
        categoryId: 1,
        image: 'https://images.pexels.com/photos/198747/pexels-photo-198747.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Jeans Lorem Ipsum 2',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed libero enim, sollicitudin a elit vel, dapibus pellentesque nunc.
Phasellus ac rutrum massa.
Vivamus non nulla lobortis augue ullamcorper congue.`,
        cost: 137.99,
        rating: 5,
        gender: Gender.Man,
        count: 5,
        soldCount: 0,
    },
    {
        id: 12,
        categoryId: 1,
        image: 'https://images.pexels.com/photos/60228/pexels-photo-60228.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Jeans Lorem Ipsum 3',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 357.99,
        rating: 2,
        gender: Gender.Unisex,
        count: 30,
        soldCount: 0,
    },
    {
        id: 13,
        categoryId: 1,
        image: 'https://images.pexels.com/photos/92961/pexels-photo-92961.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Jeans Lorem Ipsum 4',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 277.99,
        rating: 3,
        gender: Gender.Woman,
        count: 10,
        soldCount: 0,
    },
    {
        id: 14,
        categoryId: 1,
        image: 'https://images.pexels.com/photos/24155/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb',
        name: 'Jeans Lorem Ipsum 5',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 752.99,
        rating: 5,
        gender: Gender.Woman,
        count: 10,
        soldCount: 0,
    },
    {
        id: 20,
        categoryId: 2,
        image: 'https://images.pexels.com/photos/24156/pexels-photo-24156.jpg?h=350&auto=compress&cs=tinysrgb',
        name: 'Coats Lorem Ipsum 1',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed libero enim, sollicitudin a elit vel, dapibus pellentesque nunc.
Phasellus ac rutrum massa.
Vivamus non nulla lobortis augue ullamcorper congue.`,
        cost: 523.99,
        rating: 2,
        gender: Gender.Man,
        count: 5,
        soldCount: 0,
    },
    {
        id: 21,
        categoryId: 2,
        image: 'https://images.pexels.com/photos/94731/pexels-photo-94731.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Coats Lorem Ipsum 2',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed libero enim, sollicitudin a elit vel, dapibus pellentesque nunc.
Phasellus ac rutrum massa.
Vivamus non nulla lobortis augue ullamcorper congue.`,
        cost: 409.99,
        rating: 1,
        gender: Gender.Man,
        count: 20,
        soldCount: 0,
    },
    {
        id: 22,
        categoryId: 2,
        image: 'https://images.pexels.com/photos/27696/pexels-photo-27696.jpg?h=350&auto=compress&cs=tinysrgb',
        name: 'Coats Lorem Ipsum 3',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 456.99,
        rating: 1,
        gender: Gender.Unisex,
        count: 30,
        soldCount: 0,
    },
    {
        id: 23,
        categoryId: 2,
        image: 'https://images.pexels.com/photos/24257/pexels-photo-24257.jpg?h=350&auto=compress&cs=tinysrgb',
        name: 'Coats Lorem Ipsum 4',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 672.99,
        rating: 3,
        gender: Gender.Woman,
        count: 10,
        soldCount: 0,
    },
    {
        id: 24,
        categoryId: 2,
        image: 'https://images.pexels.com/photos/26067/pexels-photo-26067.jpg?h=350&auto=compress&cs=tinysrgb',
        name: 'Coats Lorem Ipsum 5',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 852.99,
        rating: 4,
        gender: Gender.Woman,
        count: 5,
        soldCount: 0,
    },
    {
        id: 30,
        categoryId: 3,
        image: 'https://images.pexels.com/photos/94777/pexels-photo-94777.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Sweaters Lorem Ipsum 1',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed libero enim, sollicitudin a elit vel, dapibus pellentesque nunc.
Phasellus ac rutrum massa.
Vivamus non nulla lobortis augue ullamcorper congue.`,
        cost: 62.99,
        rating: 2,
        gender: Gender.Man,
        count: 10,
        soldCount: 0,
    },
    {
        id: 31,
        categoryId: 3,
        image: 'https://images.pexels.com/photos/4156/fashion-woman-model-portrait.jpg?h=350&auto=compress&cs=tinysrgb',
        name: 'Sweaters Lorem Ipsum 2',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed libero enim, sollicitudin a elit vel, dapibus pellentesque nunc.
Phasellus ac rutrum massa.
Vivamus non nulla lobortis augue ullamcorper congue.`,
        cost: 92.99,
        rating: 3,
        gender: Gender.Man,
        count: 30,
        soldCount: 0,
    },
    {
        id: 32,
        categoryId: 3,
        image: 'https://images.pexels.com/photos/167890/pexels-photo-167890.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Sweaters Lorem Ipsum 3',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 97.99,
        rating: 5,
        gender: Gender.Unisex,
        count: 5,
        soldCount: 0,
    },
    {
        id: 33,
        categoryId: 3,
        image: 'https://images.pexels.com/photos/157888/fashion-glasses-go-pro-female-157888.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Sweaters Lorem Ipsum 4',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 28.99,
        rating: 4,
        gender: Gender.Woman,
        count: 10,
        soldCount: 0,
    },
    {
        id: 34,
        categoryId: 3,
        image: 'https://images.pexels.com/photos/63953/pexels-photo-63953.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Sweaters Lorem Ipsum 5',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 512.99,
        rating: 0,
        gender: Gender.Woman,
        count: 10,
        soldCount: 0,
    },
    {
        id: 40,
        categoryId: 4,
        image: 'https://images.pexels.com/photos/169729/pexels-photo-169729.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Wear to work Lorem Ipsum 1',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed libero enim, sollicitudin a elit vel, dapibus pellentesque nunc.
Phasellus ac rutrum massa.
Vivamus non nulla lobortis augue ullamcorper congue.`,
        cost: 89.99,
        rating: 3,
        gender: Gender.Man,
        count: 5,
        soldCount: 0,
    },
    {
        id: 41,
        categoryId: 4,
        image: 'https://images.pexels.com/photos/216983/pexels-photo-216983.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Wear to work Lorem Ipsum 2',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed libero enim, sollicitudin a elit vel, dapibus pellentesque nunc.
Phasellus ac rutrum massa.
Vivamus non nulla lobortis augue ullamcorper congue.`,
        cost: 261.99,
        rating: 2,
        gender: Gender.Man,
        count: 10,
        soldCount: 10,
    },
    {
        id: 42,
        categoryId: 4,
        image: 'https://images.pexels.com/photos/93488/pexels-photo-93488.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Wear to work Lorem Ipsum 3',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 866.99,
        rating: 0,
        gender: Gender.Unisex,
        count: 10,
        soldCount: 0,
    },
    {
        id: 43,
        categoryId: 4,
        image: 'https://images.pexels.com/photos/24272/pexels-photo-24272.jpg?h=350&auto=compress&cs=tinysrgb',
        name: 'Wear to work Lorem Ipsum 4',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 173.99,
        rating: 5,
        gender: Gender.Woman,
        count: 5,
        soldCount: 0,
    },
    {
        id: 44,
        categoryId: 4,
        image: 'https://images.pexels.com/photos/108061/pexels-photo-108061.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Wear to work Lorem Ipsum 5',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        cost: 527.99,
        rating: 4,
        gender: Gender.Woman,
        count: 5,
        soldCount: 0,
    },
];
