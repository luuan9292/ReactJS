import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';

import * as serviceWorker from './serviceWorker';
import App from './components/App';

import { firebaseApp, usersRef } from './services/firebase';
import { actLogin, actLogout } from './actions/index';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

firebaseApp.auth().onAuthStateChanged(user => { //Vi Singin anh huong toi toan bo component nen de xac thuc trang thai o day, luon lang nghe trang thai cua user
    if (user) {

        let userInfo = {
            email: user.email,
            uid: user.uid,
            website: '',
            isAdmin: false
        }

        usersRef.child(user.uid).once('value').then( data => { //lay tu day de day len store sau nay chia se cho cac component khac

            userInfo.isAdmin = data.val().isAdmin;
            userInfo.website = data.val().website; //vi data tra ve user nam trong nay
        
            store.dispatch(actLogin(userInfo)); //de store o day vi async
        })
    } else {
        //lout out thi cung update lai store, khi phuong thuc sign duoc kich hoat thi phan trang thai cung tu dong duoc update
        store.dispatch(actLogout());
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
