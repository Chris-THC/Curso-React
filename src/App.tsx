import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import { ContextAppProvider } from "./context/ContextAppProvider";

const App: React.FC = () => {
  return (
    <ContextAppProvider>
      <ComponentA />
      <ComponentB />
    </ContextAppProvider>
  );
};

export default App;
