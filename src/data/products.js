const data = [
  {
    id: 1,
    img: require('../assets/images/ecommerce/01.jpg'),
    name: 'Casual T-Shirt',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    status: 'none',
    price: 100.0,
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['White', 'gray'],
    size: ['M', 'L', 'XL'],
    tags: ['Diesel', 'Hudson', 'Lee'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'black',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 2,
    img: require('../assets/images/ecommerce/02.jpg'),
    name: 'Fitted T-Shirt',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    status: 'sale',
    price: 260.0,
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['green', 'gray'],
    size: ['M', 'L', 'XL'],
    tags: ['Levis', 'Hudson', 'Lee'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 3,
    img: require('../assets/images/ecommerce/03.jpg'),
    name: 'Half Sleeve',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: '360.00',
    statu: 'none',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['White', 'gray', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Diesel', 'Spykar', 'Lee'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 4,
    img: require('../assets/images/ecommerce/04.jpg'),
    name: 'Cut Top Dress',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: '526.00',
    statu: '50%',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Women',
    colors: ['red', 'gray', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Levis', 'Lee', 'Hudson'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 5,
    img: require('../assets/images/ecommerce/02.jpg'),
    name: 'Fitted T-Shirt',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 206.0,
    stock: 'In stock',
    statu: 'none',
    review: '(250 review)',
    category: 'Men',
    colors: ['green', 'gray', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Denien', 'Diesel', 'Spykar'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 6,
    img: require('../assets/images/ecommerce/03.jpg'),
    name: 'Half Sleeve',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 926.0,
    statu: 'gift',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['purple', 'orange', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Lee', 'Lifestyle', 'Nike'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 7,
    img: require('../assets/images/ecommerce/01.jpg'),
    name: 'Casual T-Shirt',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 1000.0,
    statu: 'sale',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['orange', 'pink', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Lee'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 8,
    img: require('../assets/images/ecommerce/03.jpg'),
    name: 'Half Sleeve',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 500.0,
    statu: 'none',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['purple', 'pink', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Hudson', 'Lee'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 9,
    img: require('../assets/images/ecommerce/03.jpg'),
    name: 'Half Sleeve',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 826.0,
    statu: 'none',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['White', 'pink', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Spykar'],
    variants: [
      {
        color: 'purple',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'blue',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'white',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 10,
    img: require('../assets/images/ecommerce/04.jpg'),
    name: 'Cut Top Dress',
    note: 'Simply dummy text of the printing',
    discription:
      ':It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 726.0,
    statu: 'none',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['White', 'pink', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Hudson', 'Spykar'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'blue',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'red',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 11,
    img: require('../assets/images/ecommerce/02.jpg'),
    name: 'Fitted T-Shirt',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 426.0,
    statu: 'none',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['White', 'pink', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Diesel', 'Hudson', 'Lee'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'blue',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 12,
    img: require('../assets/images/ecommerce/03.jpg'),
    name: 'Half Sleeve',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 626.0,
    statu: 'none',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['White', 'pink', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Diesel', 'Hudson', 'Lee'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'blue',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'purple',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 13,
    img: require('../assets/images/ecommerce/02.jpg'),
    name: 'Fitted T-Shirt',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 450.0,
    statu: 'love',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['White', 'pink', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Diesel', 'Hudson', 'Lee'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'blue',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'black',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 14,
    img: require('../assets/images/ecommerce/03.jpg'),
    name: 'Half Sleeve',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 26.0,
    statu: 'none',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['White', 'blue', 'yellow'],
    size: ['M', 'L', 'XL'],
    tags: ['Diesel', 'Lee'],
    variants: [
      {
        color: 'White',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'blue',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'yellow',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 15,
    img: require('../assets/images/ecommerce/04.jpg'),
    name: 'Cut Top Dress',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 26.0,
    statu: 'Hot',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Women',
    colors: ['black', 'blue', 'yellow'],
    size: ['M', 'L', 'XL'],
    tags: ['Lee'],
    variants: [
      {
        color: 'black',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'blue',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'yellow',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'yellow',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 16,
    img: require('../assets/images/ecommerce/02.jpg'),
    name: 'Fitted T-Shirt',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 550.0,
    statu: 'none',
    stock: 'Out of stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['black', 'pink', 'yellow'],
    size: ['M', 'L', 'XL'],
    tags: ['Hudson'],
    variants: [
      {
        color: 'black',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'yellow',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'blue',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
    ],
  },
  {
    id: 17,
    img: require('../assets/images/ecommerce/03.jpg'),
    name: 'Half Sleeve',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 550.0,
    statu: 'none',
    stock: 'Out of stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['black', 'pink', 'yellow'],
    size: ['M', 'L', 'XL'],
    tags: ['Lee'],
    variants: [
      {
        color: 'black',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'yellow',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'red',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
    ],
  },
  {
    id: 18,
    img: require('../assets/images/ecommerce/01.jpg'),
    name: 'Casual T-Shirt',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 550.0,
    statu: 'none',
    stock: 'Out of stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['black', 'pink', 'yellow'],
    size: ['M', 'L', 'XL'],
    tags: ['Diesel', 'Hudson', 'Lee'],
    variants: [
      {
        color: 'black',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'yellow',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'purple',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
    ],
  },
  {
    id: 19,
    img: require('../assets/images/ecommerce/03.jpg'),
    name: 'Half Sleeve',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 550.0,
    statu: 'none',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['red', 'pink', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Denizen', "Levi's"],
    variants: [
      {
        color: 'red',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'blue',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'yellow',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 20,
    img: require('../assets/images/ecommerce/03.jpg'),
    name: 'Half Sleeve',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 550.0,
    statu: 'none',
    stock: 'Out of stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['gray', 'pink', 'yellow'],
    size: ['M', 'L', 'XL'],
    tags: ['Lee'],
    variants: [
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'yellow',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'blue',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 21,
    img: require('../assets/images/ecommerce/04.jpg'),
    name: 'Cut Top Dress',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 550.0,
    statu: 'none',
    stock: 'Out of stock',
    review: '(250 review)',
    category: 'Women',
    colors: ['black', 'pink', 'blue'],
    size: ['M', 'L', 'XL'],
    tags: ['Lee'],
    variants: [
      {
        color: 'black',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'blue',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'yellow',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 22,
    img: require('../assets/images/ecommerce/02.jpg'),
    name: 'Fitted T-Shirt',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 550.0,
    statu: 'none',
    stock: 'Out of stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['black', 'pink', 'red'],
    size: ['M', 'L', 'XL'],
    tags: ['Denizen', 'Spykar'],
    variants: [
      {
        color: 'black',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'red',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'yellow',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 23,
    img: require('../assets/images/ecommerce/03.jpg'),
    name: 'Half Sleeve',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 550.0,
    statu: 'none',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['black', 'pink', 'red'],
    size: ['M', 'L', 'XL'],
    tags: ['Diesel'],
    variants: [
      {
        color: 'black',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'red',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'yellow',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
  {
    id: 24,
    img: require('../assets/images/ecommerce/03.jpg'),
    name: 'Half Sleeve',
    note: 'Simply dummy text of the printing',
    discription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    discountPrice: 350.0,
    price: 550.0,
    statu: 'none',
    stock: 'In stock',
    review: '(250 review)',
    category: 'Men',
    colors: ['black', 'pink', 'red', 'gray'],
    size: ['M', 'L', 'XL'],
    tags: ['Nike', 'Caprese', 'Lee'],
    variants: [
      {
        color: 'black',
        images: require('../assets/images/ecommerce/01.jpg'),
      },
      {
        color: 'pink',
        images: require('../assets/images/ecommerce/04.jpg'),
      },
      {
        color: 'red',
        images: require('../assets/images/ecommerce/02.jpg'),
      },
      {
        color: 'gray',
        images: require('../assets/images/ecommerce/03.jpg'),
      },
    ],
  },
]

export default data
