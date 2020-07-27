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

    async _execute(endpoint, array = {}, method = 'post') {
        const response = await axios({
            url: endpoint,
            baseURL: this._url,
            method: method,
            params: array,
            headers: this._headers
        });

        return await response.data;
    }

    altcoin_address(array = {}) {
        return this._execute('altcoin/address', array);
    }

    altcoin_withdrawal(array = {}) {
        return this._execute('altcoin/withdrawal', array);
    }

    balance(coin = '') {
        return this._execute('balance/'+coin, {}, 'get');
    }

    bank_deposit_boleto(array) {
        return this._execute('bank/deposit/boleto', array);
    }

    charge_boleto(array = {}) {
        return this._execute('charge/boleto', array);
    }

    charge_boleto_receive_in_cash(boleto_id) {
        return this._execute('charge/boleto/'+boleto_id+'/receive-in-cash');
    }

    charge_client(array = {}) {
        return this._execute('charge/client', array);
    }

    coin(coin = '') {
        return this._execute('coin/'+coin, {}, 'get');
    }

    transfer(array = {}) {
        return this._execute('transfer', array);
    }

}

module.exports = Bee
