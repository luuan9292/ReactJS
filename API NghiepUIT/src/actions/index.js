import * as types from '../constants/ActionType';
import apiCaller from '../utils/apiCaller';

export const actFetchProductsRequest = () => { // Khi dispatch o ngoai goi thi se phai ngay lap tuc truyen den reducer
    return (dispatch) => { //Nhung do trong nay lai co them 1 callback nua nen phai dung middleware tri hoan dispatch dau tien lai
        return apiCaller('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        }); //Den khi fetch API xong thi moi tiep tuc
    };
}

/*
dispatch(actions)-----------(middleware)--------reducers

-Giúp trì hoảng cái dispatch đầu tiên có nghĩa là: sau khi truyền 1 action vào cho reducer để xử lý thì việc truyền đó ngay lập tức phải được thực hiện,  nhưng callback thứ 2 làm chậm trễ điều đó vì phải đợi fetch.
-Tại sao phải fetch data thông qua 1 actions cơ chứ, mà ko phải là 1 hàm ?, fetch bằng 1 actions là cách đơn giản nhất để thực hiện, đễ quản lý code, đơn giản cùng 1 tác vụ thì xử lý chung,
*/

export const actFetchProducts = products => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}


export const actDeleteProductRequest = id => {
    return dispatch => {
        return apiCaller(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        });
    }
}

export const actDeleteProduct = id => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}


export const actAddProductRequest = product => {
    return dispatch => {
        return apiCaller('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = product => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}


export const actGetProductRequest = id => {
    return dispatch => {
        apiCaller(`products/${id}`, 'GET', null).then(res => { //tra ve 1 product
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = product => {
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}


export const actUpdateProductRequest =  product => {
    return dispatch => {
        return apiCaller(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = product => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}





