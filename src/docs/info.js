
export const info = {
    definition: {
        openapi: '3.0.0',
        info: { 
            title: 'Adoptme-Backend',
            version: '1.0.0',
            description: 'Backend for Adoptme-App'
        },
        servers: [
            { url: 'http://localhost:3000/api' }
        ]
    },

    apis: ['./src/docs/*yml']


    

} 