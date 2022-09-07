export class Contact {
    name = '';
    last_name = '';
    email = '';
    connected = false;
    
    constructor(name, last_name, email, connected){
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.connected = connected

    }
}