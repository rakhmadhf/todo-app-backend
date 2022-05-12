const fs = require('fs');
import fetch from 'node-fetch';

class Vault {

    secretApi = '/v1/secret/';
    kubernetesApi = '/v1/auth/kubernetes/login';
    vaultToken = '';

    constructor(vaultUrl, jwtPath) {
        this.vaultUrl = vaultUrl;
        this.jwtPath = jwtPath;
        this.token = fs.readFileSync(this.jwtPath, 'utf-8');
    }

    async login() {
        const response = await fetch(this.vaultUrl + this.kubernetesApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                role: "todoapp-backend",
                jwt: this.token
            })
        })

        const responseJson = await response.json();

        console.log(responseJson)

        this.vaultToken = responseJson.auth.client_token;
    }

    async getConfig(configPath) {
        const response = await fetch(this.vaultUrl + /v1/ + configPath, {
            headers: {
                'X-Vault-Token': this.vaultToken
            },
        })

        const responseJson = await response.json();

        return responseJson.data;
    }
}

module.exports = Vault;