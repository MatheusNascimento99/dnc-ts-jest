import * as request from 'supertest';

describe('Int - Produto Suite', () => {
    it('##GET /produto/teste', async () => {
        const response = await request('http://localhost:8080')
        .get('/produto/teste')

        expect(response.status).toBe(200)
    })
})