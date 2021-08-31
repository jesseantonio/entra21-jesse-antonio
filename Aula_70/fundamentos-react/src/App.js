import './App.css';
import { Card } from './components/Card';
import { ListaAlunos } from './components/ListaAlunos';
import { ComProps } from './components/ComProps';
import { PrimeiroComponente } from './components/PrimeiroComponente';
import { Familia } from './components/Familia';
import { MembroFamilia } from './components/MembroFamilia';
import { ParOuImpar } from './components/ParOuImpar';
import { Notificacoes } from './components/Notificacoes';
import { ManipulandoEventos } from './components/ManipuladoEventos';
import { Relogio } from './components/Relogio';
import { ValorAleatorio } from './components/ValorAleatorio';
import { ComponentesControlados} from './components/ComponentesControalados';
import { Contador } from './components/Contador';


function App() {
  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <div className="cards">
        <Card titulo="Primeiro componente" cor="#F24464">
          <PrimeiroComponente />
        </Card>
        <Card titulo="Componente com props">
          <ComProps mensagem="Estou sendo enviado pelas props" />
          <ComProps mensagem="Outra mensagem..." />
        </Card>
        <Card titulo="Lista de alunos" cor="#424255">
          <ListaAlunos />
        </Card>
        <Card titulo="Children" cor="#37A6A6">
          <Familia sobrenome="da Silva">
            <MembroFamilia nome="Ana" />
            <MembroFamilia nome="Marcos" />
            <MembroFamilia nome="José" />
          </Familia>
        </Card>
        <Card titulo ="Renderização">
          <ParOuImpar numero={10} />
          <ParOuImpar numero={5} />
          <Notificacoes mensagens={["Oi!"]}/>
        </Card>
      <Card titulo ="Manipulando eventos">
        <ManipulandoEventos/>
      </Card>
      <Card titulo="State">
        <Relogio/>
        <hr/>
        <ValorAleatorio max={100}/>
      </Card>
      <Card titulo="Componente controlado">
      <ComponentesControlados/>
      </Card>
      <Card titulo="Testando contador">
        <Contador inicial={10}/>
      </Card>
      </div>
    </div>
  );
}

export default App;