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

    charge_boleto_create(array = {}) {
        return this._execute('charge/boleto/create', array);
    }

    charge_client_create(array = {}) {
        return this._execute('charge/client/create', array);
    }

    coin_list() {
        return this._execute('coin/list');
    }

    coin_info(coin = '') {
        return this._execute('coin/info', {coin});
    }

    transfer_create(array = {}) {
        return this._execute('transfer/create', array);
    }

}

module.exports = Bee
