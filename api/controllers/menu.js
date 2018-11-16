module.exports = function (app) {

    app.get('/menu', function (request, response) {

        var lista = [{
                nome: "Primeiro Menu",
                link: "#"
            },
            {
                nome: "Segundo Menu",
                link: "#"
            },
            {
                nome: "Terceiro Menu",
                link: "#"
            }
        ];

        response.send(JSON.stringify(lista));
        // console.log('listando...');
        // response.render('admin/lista');
    });

}