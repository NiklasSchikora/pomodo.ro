import { Center, Container } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { TimeCircle } from "./components/TimeCircle";
import { TimeControl } from "./components/TimeControl";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Center>
          <TimeCircle />
        </Center>
        <Center>
          <TimeControl />
        </Center>
      </Container>
    </div>
  );
}

export default App;
