const axios = require('axios').default;

class Bee {

    constructor(token) {
        this._url = 'https://bee.cash/api/';

        this._headers = {
            'WWW-Authenticate': 'Token',
            'Authorization': 'Token '+ token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    async _execute(endpoint, array = {}) {
        const response = await axios({
            url: endpoint,
            baseURL: this._url,
            method: 'post',
            params: array,
            headers: this._headers
        });

        return await response.data;
    }

    altcoin_address_create(array = {}) {
        return this._execute('altcoin/address/create', array);
    }

    altcoin_withdrawal_create(array = {}) {
        return this._execute('altcoin/withdrawal/create', array);
    }

    balance(coin = '') {
        return this._execute('balance', {coin});
    }

    coin_list() {
        return this._execute('coin/list');
    }

    coin_info(coin = '') {
        return this._execute('coin/info', {coin});
    }

    invoice_create(array = {}) {
        return this._execute('invoice/create', array);
    }

    invoice_pay(array = {}) {
        return this._execute('invoice/pay', array);
    }

    invoice_view(array = {}) {
        return this._execute('invoice/view', array);
    }

    transfer_create(array = {}) {
        return this._execute('transfer/create', array);
    }

    user_info(username) {
        return this._execute('user/info', {username});
    }
}

module.exports = Bee
