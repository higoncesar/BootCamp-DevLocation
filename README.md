# Desafio 03 - BootCamp Rocketseat

## OBJETIVO

O usuário acessa a aplicação, onde téra um mapa que ao clicar em uma posição, a aplicação abre um formulário em um modal que contém um único campo, para entrada do username do Github, com isso é feito uma busca na API do Github que traz nome e avatar, que adicina o usuário no store do Redux, e ao ser adicionado ele aparece no mapa e na lista lateral. Sempre é retornado mensagem para o úsuario tanto de sucesso quanto erro, e também pode-se excluir usuário da listagem na sidebar.

## EU FUI ALÉM

Além do objetivo do projeto citado acima, adicionei uma nova funcionalidade de Geolocalização por IP, que identifica o IP do cliente assim que acessa a aplicação, utlizando a LIB public-ip, e busca as informações da localização Geografica com base no IP na API http://ip-api.com, e assim a aplicação já inicia com o mapa onde o usuário se localiza.

## TECNOLOGIAS / LIBS UTILIZADAS

ReactJS, Styled Components, Prop Types, Redux, Saga, Axios, React Modal, React Map GL, ESLint, EditorConfig, Prettier dentre outras.

## Layout da Aplicação:

![Listagem](/assets/listagem.png)
![Novo](/assets/novo.PNG)
