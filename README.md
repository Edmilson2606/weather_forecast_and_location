# Weather Forecast and Location

## Previsões do tempo e endereços em tempo real.

> Combinando recursos de geolocalização e previsão do tempo, o sistema é uma ferramenta essencial para melhorar a produtividade e a precisão no planejamento de atividades que dependem de condições geográficas e climáticas.

O foco na acessibilidade e simplicidade é fundamental para o sucesso de qualquer sistema interno. Por isso, será desenvolvida uma interface de usuário atraente e funcional, permitindo que os funcionários insiram facilmente as informações necessárias para obter dados de endereço e previsões meteorológicas.

Este projeto visa criar uma ferramenta útil para o dia a dia dos usuários que lidam com esse tipo de informação. As telas serão desenvolvidas com ênfase no design e na experiência do usuário, fornecendo dados importantes sobre endereços e previsões do tempo através de uma API.

## Desafio 2 - Resolução
Link do sistema - https://wfl.netlify.app/

## Stacks
> HTML, CSS, JavaScript e Insomnia

## Figma - Tela de informações - Design Frame
```css
:root {
    --blue: #0C70F2;
    --white: #FFFFFF;
    --black: #000000;
    --black-gray: #1F1F1F;
    --gray: #393939;
    --page: #F5F5F5;
    --container-main: #F2F2F2;
    --container-border: #BABABA;
}

body {
    font-family: Inter;
    background-color: var(--page);
    width: 1608px;
    height: 2983px;
    margin: auto;
}
```

## Requisitos de Sistema
Para uma melhor visualização do sistema, recomenda-se que o monitor esteja configurado com uma resolução mínima de 1920x1080. Isso garantirá que todos elementos da interface sejam exibidos, proporcionando uma experiência de usuário ideal.

## Teste da requisição na API "viacep.com.br/" 
![](./img/apiCEP.png)

## Teste da requisição na API "open-meteo.com/en/docs/"
![](./img/apiPrevisao.png)