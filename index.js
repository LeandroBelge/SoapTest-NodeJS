const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?wsdl';

var args = {intA: 1, intB: 3};

soap.createClientAsync(url).then((client) => {
    client.Add(args, (err, result) => {
        console.log('Resultado Assíncrono: ');
        console.log(result);
    })
});

soap.createClient(url, function(err, client) {
    client.Add(args, function(err, result) {
        console.log('Resultado Síncrono: ');
        console.log(result);
    });
});
