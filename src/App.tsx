import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Container,
} from "@chakra-ui/react";
import { Header } from "./components/Header";
import { TimeCircle } from "./components/TimeCircle";
import { TimeControl } from "./components/TimeControl";
import { TimeInput } from "./components/TimeInput";

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
        <Center pt={5}>
          <Accordion allowToggle w="auto">
            <AccordionItem>
              <h2>
                <AccordionButton w="100%">
                  <Box flex="1" textAlign="center">
                    <b>Modify time flow</b>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p>Modify your work time and break time flow.</p>
                <TimeInput />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Center>
      </Container>
    </div>
  );
}

export default App;
