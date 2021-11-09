Configuração do framework Bootstrap


    * npm install express --save
1. instalar o handlebars:
    * npm install --save express-handlebars
2. configurar o handlebars com o express
    * configurar para dizer que o handlebars será a nossa tamplate engine
3. criar uma pasta views na raiz do projeto
    * dentro da pasta views, criar uma pasta chamada layouts
    * dentro da pasta views/layouts, criar um arquivo chamado main.handlebars
4. dentro do arquivo main.handlebars construir um html básico, com o {{{body}}}
dentro do body
5. baixar o bootstrap: https://getbootstrap.com/ é framework html 
    * criar uma pasta no diretório raiz com o nome public. Nela estarão os arquivos css e js do bootstrap
    * criar, dentro de public, uma pasta img
    * escrever, dentro do <head> do main.handlebars: <link rel="stylesheet" href="/css/bootstrap.css">
    * entrar na página do getbootstrap, descer até CDN e copiar as linhas:
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

        copiar para dentro de main.handlebars abaixo do </body>
        escrever <script src="/js/bootstrap.js"></script><!arquivo onde estão os js> também abaixo de </body>
6. dentro da pasta views, criar uma pasta partials, funcionalidade do bootstrap
    * com a partals, consgio dividir meu template em partes
    * criar um arquivo, dendro de partals, _navbar.handlebars, será a barra em todo o site
    * lá no main.handlebars, antes do {{{body}}} e digitar: {{>_navbar}}

