## **README.md: Projeto Atletas Paralímpicos**

### **Descrição**

Este projeto web tem como objetivo criar um diretório de atletas paralímpicos brasileiros, permitindo a pesquisa por nome, modalidade, local de nascimento, biografia, conquistas e tags.

### **Funcionalidades**

* **Pesquisa:** Permite realizar buscas por palavras-chave em diversos campos, como nome do atleta, modalidade, local de nascimento, biografia, conquistas e tags.
* **Detalhes do atleta:** Ao clicar no nome do atleta, o usuário é direcionado para a página oficial do atleta no site do Comitê Paralímpico Brasileiro (CPB).
* **Links para redes sociais:** Quando disponível, o perfil do Instagram do atleta é fornecido.
* **Design responsivo:** O site se adapta a diferentes tamanhos de tela, garantindo uma boa experiência para o usuário.

### **Tecnologias Utilizadas**

* **HTML:** Estrutura da página web.
* **CSS:** Estilização da página, incluindo layout, cores e tipografia.
* **JavaScript:** Cria a funcionalidade de pesquisa e interação com o usuário.

### **Estrutura de Arquivos**

```
projeto-atletas-paralimpicos/
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── style.css
│   │   └── responsive.css
│   ├── images/
│   │   ├── ipc-logo.png
│   │   └── ... (outras imagens dos atletas)
│   ├── js/
│   │   ├── dados.js
│   │   └── app.js
│   └── index.html
└── README.md
```

* **src/css:** Contém os arquivos CSS responsáveis pelo estilo da página.
* **src/images:** Armazena as imagens utilizadas no projeto.
* **src/js:** Contém os arquivos JavaScript responsáveis pela lógica da aplicação.
* **index.html:** Arquivo principal da página web.
* **README.md:** Este arquivo.

### **Como Rodar o Projeto**

1. **Clonar o repositório:**
   ```bash
   git clone https://[seu-repositorio]/projeto-atletas-paralimpicos.git
   ```
2. **Abrir o arquivo index.html:** Abra o arquivo `index.html` em um navegador web.

### **Dados dos Atletas**

Os dados dos atletas são armazenados em um array JavaScript no arquivo `dados.js`. Cada objeto dentro do array representa um atleta e contém as seguintes propriedades:

* `titulo`: Nome completo do atleta.
* `retrato`: URL da imagem do atleta.
* `modalidade`: Modalidade esportiva.
* `localDeNascimento`: Local de nascimento.
* `biografia`: Breve biografia do atleta.
* `conquistas`: Principais conquistas.
* `link`: Link para a página oficial do atleta no CPB.
* `redeSocial`: Link para o perfil do Instagram do atleta (se disponível).
* `tags`: Palavras-chave para facilitar a pesquisa.

### **Funcionalidade de Pesquisa**

A função `pesquisar()` em `app.js` é responsável por:

1. Obter o valor digitado no campo de pesquisa.
2. Iterar sobre o array de atletas.
3. Verificar se o valor digitado está contido em algum dos campos do objeto atleta (título, modalidade, local de nascimento, biografia, conquistas ou tags).
4. Se houver correspondência, o atleta é adicionado à lista de resultados.
5. A lista de resultados é exibida na seção `resultados-pesquisa`.

### **Melhorias Futuras**

* **Filtro por modalidade:** Implementar um filtro para exibir apenas os atletas de uma determinada modalidade.
* **Ordenação dos resultados:** Permitir que os resultados sejam ordenados por nome, modalidade ou data de nascimento.
* **Integração com APIs:** Integrar o projeto com APIs de redes sociais para obter informações mais detalhadas sobre os atletas.
* **Design responsivo:** Aprimorar o design responsivo para garantir uma experiência ainda melhor em diferentes dispositivos.

**Observações:**

* **Personalização:** Você pode personalizar o design, a estrutura e as funcionalidades do projeto de acordo com suas necessidades.
* **Dados:** Aumente a base de dados de atletas para tornar o projeto mais completo.
* **Acessibilidade:** Certifique-se de que o site seja acessível a pessoas com deficiência, seguindo as diretrizes de acessibilidade web.

Este README fornece uma visão geral do projeto e serve como um ponto de partida para futuras melhorias e desenvolvimento.
