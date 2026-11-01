const express = require('express');
const app = express();
const PORT = 3030;

// 1. Página inicial – Rota /
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Catálogo de Heróis</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; line-height: 1.6; }
                h1 { color: #333; }
                ul { list-style-type: none; padding-left: 0; }
                li { margin: 8px 0; }
                a { color: #0066cc; text-decoration: none; font-weight: bold; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>
            <p>Seja bem-vindo(a) ao portal de personagens da Marvel e DC! Explore as editoras e os perfis dos super-heróis abaixo.</p>
            
            <h3>Editoras:</h3>
            <ul>
                <li><a href="/marvel">Ver Universo Marvel</a></li>
                <li><a href="/dc">Ver Universo DC</a></li>
            </ul>

            <hr>

            <h3>Personagens em Destaque:</h3>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor (Marvel)</a></li>
                <li><a href="/personagem/marvel/Homem de Ferro">Homem de Ferro (Marvel)</a></li>
                <li><a href="/personagem/dc/Batman">Batman (DC)</a></li>
                <li><a href="/personagem/dc/Mulher-Maravilha">Mulher-Maravilha (DC)</a></li>
            </ul>
        </body>
        </html>
    `);
});

// 2. Rota da Marvel – /marvel
app.get('/marvel', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Marvel Comics</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; line-height: 1.6; }
                h1 { color: #e23636; }
                a { color: #0066cc; text-decoration: none; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <h1>Marvel Comics</h1>
            <p>A Marvel Comics é uma das maiores editoras de quadrinhos do mundo, criadora de heróis icônicos como Homem-Aranha, Os Vingadores, X-Men e Quarteto Fantástico.</p>
            
            <h3>Personagens Disponíveis:</h3>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Homem de Ferro">Homem de Ferro</a></li>
                <li><a href="/personagem/marvel/Capitão América">Capitão América</a></li>
            </ul>

            <br>
            <p><a href="/">← Voltar para a Página Inicial</a></p>
        </body>
        </html>
    `);
});

// 2. Rota da DC – /dc
app.get('/dc', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>DC Comics</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; line-height: 1.6; }
                h1 { color: #0476f2; }
                a { color: #0066cc; text-decoration: none; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <h1>DC Comics</h1>
            <p>A DC Comics é conhecida por abrigar lendários super-heróis e formar a Liga da Justiça, destacando-se por ícones como Superman, Batman e Mulher-Maravilha.</p>
            
            <h3>Personagens Disponíveis:</h3>
            <ul>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Mulher-Maravilha">Mulher-Maravilha</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>

            <br>
            <p><a href="/">← Voltar para a Página Inicial</a></p>
        </body>
        </html>
    `);
});

// 3. Rota com dois parâmetros obrigatórios – /personagem/:empresa/:nome
app.get('/personagem/:empresa/:nome', (req, res) => {
    const { empresa, nome } = req.params;
    const empresaFormatada = empresa.toUpperCase();

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Perfil do Personagem - ${nome}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; line-height: 1.6; }
                .card { border: 1px solid #ccc; padding: 20px; border-radius: 8px; max-width: 400px; background-color: #f9f9f9; }
                h1 { margin-top: 0; color: #333; }
                span.badge { background: #333; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 0.9em; }
                a { color: #0066cc; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>${nome}</h1>
                <p><strong>Universo/Editora:</strong> <span class="badge">${empresaFormatada}</span></p>
                <p>Detalhes do personagem recebidos com sucesso através dos parâmetros de rota no Express (<code>req.params</code>).</p>
            </div>
            
            <br>
            <p><a href="/${empresa.toLowerCase()}">← Voltar para a lista da ${empresaFormatada}</a> | <a href="/">Página Inicial</a></p>
        </body>
        </html>
    `);
});

// Inicialização do servidor na porta 3030
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});