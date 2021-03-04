export class API {
    id: string;
    name: string;
    username: string;
    email: string;
    idFoto: string;
    title: string;
    url: string;

    constructor(id: string, name: string, username: string, email: string, idFoto: string, title: string, url: string) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.idFoto = idFoto;
        this.title = title;
        this.url = url;
    }

}