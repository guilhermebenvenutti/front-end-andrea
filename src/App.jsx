import Card from './components/Card';

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Projeto Front-End - Guilherme Benvenutti</h1>
      <p>Este projeto foi criado com Vite e React.</p>

      <Card
        titulo="Meu primeiro componente!"
        descricao="Este é um exemplo de componente que usa propriedades (props) em React."
      />

      <Card
        titulo="Outro exemplo"
        descricao="Podemos criar vários cards diferentes, mudando apenas as propriedades."
      />
    </div>
  );
}

export default App;
