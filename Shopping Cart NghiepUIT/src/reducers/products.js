
let initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/1/21/636836628988322696_ip7-plus-vang-1.png',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating: 4
    },
    {
        id : 2,
        name : 'Samsung Galaxy S7',
        image : 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s7-edge-den-didongviet_11.jpg',
        description : 'Sản phẩm do Samsung sản xuất',
        price : 400,
        inventory : 15,
        rating: 3
    },
    {
        id : 3,
        name : 'Oppo F1s',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/2/9/636222506137676408_f1s-c.jpg',
        description : 'Sản phẩm do Oppo sản xuất',
        price : 500,
        inventory : 10,
        rating: 5
    },
];

let products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
};

export default products;