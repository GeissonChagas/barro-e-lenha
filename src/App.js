
import './App.css';
import Header from './components/Header.js';
import ServicosComponent from './components/ServicosComponent';

function App() {

  const items = [
    { id: 1, image: 'https://example.com/image1.jpg', description: 'Descrição da imagem 1' },
    { id: 2, image: 'https://example.com/image2.jpg', description: 'Descrição da imagem 2' },
    { id: 3, image: 'https://example.com/image3.jpg', description: 'Descrição da imagem 3' },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <h2>Sobre Nós</h2>
        <p>
        Somos uma equipe dedicada à venda e montagem de churrasqueiras de alvenaria feitas em tijolos maciços e furados. Com anos de experiência no mercado, 
        temos orgulho em oferecer aos nossos clientes produtos de alta qualidade e durabilidade.
        Embora atualmente trabalhemos com vendas online, nossa história começou com uma loja física localizada na Rodovia Washigton Luiz. Depois de muitos 
        anos atendendo clientes em nossa loja, decidimos nos especializar na venda online para região local. 
        Nossa equipe de montagem é altamente qualificada e comprometida em garantir que sua churrasqueira seja instalada com segurança e precisão, além disso, nosso 
        objetivo é proporcionar a você a melhor experiência possível de compra e uso de sua churrasqueira de tijolinho. 

        </p>
        <div>
          <h1>Nossos Serviços:</h1>
          <ServicosComponent items={items} />
        </div>
      </main>
    </div>
  );
}

export default App;
