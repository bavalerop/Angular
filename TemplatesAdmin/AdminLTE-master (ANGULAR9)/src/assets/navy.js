class navy {

    constructor() {
        this.mynav = {
            id: 1,
            title: 'Maestros',
            type: 'group',
            translate: '',
            icon: '',
            hidden: false,
            route: '',
            classes: '',
            functiones: '',
            children: null
        };
    }


    getNavy() {
        console.log('entro');
        return this.mynav;
    }
}
exports.navy = navy;