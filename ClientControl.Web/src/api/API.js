//const base = "localhost";
const base = "192.168.178.14";
const clients_url = "http://"+base+":8000/clients";
const shellcode_url = "http://"+base+":8000/shellcode";


export function getShellCodes() {
    return fetch(shellcode_url)
        .then(response => response.json())
        .then(responseJson => responseJson);
}

export function getClients() {
    return fetch(clients_url)
        .then(response => response.json())
        .then(responseJson => responseJson);
}

export function setShellcode(mac, shellcode){
        let params = {
            mac: mac,
            shellcode: shellcode
        }

        const searchParams = Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');


        return fetch(clients_url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: searchParams
        });
    }