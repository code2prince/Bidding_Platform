import swaggerAutogen from 'swagger-autogen';

let swagger = swaggerAutogen();

const doc = {
    info: {
        title: "KGK Bidding Platform APIs"
    },
    host: {
        host: "Port:5555"
    }
}
const outputFile = './swagger-output.json';
const route = ["./server.js"]
swagger(outputFile, route, doc)