

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
        // CORS no NodeJS sem o uso de Frameworks
        // https://pt.stackoverflow.com/questions/5959/cors-no-nodejs-sem-o-uso-de-frameworks
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.send(lista);
        console.log('listando...');
        // response.render('admin/lista');
    });

}