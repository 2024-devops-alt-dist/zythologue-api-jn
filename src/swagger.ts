import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Zythologue Backend API',
            version: '1.0.0',
            description: 'API for managing breweries and beers',
        },
        servers: [
            {
                url: 'http://localhost:4242',
                description: 'Development server',
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Path to the route files
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
