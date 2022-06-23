import React from "react";
import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
} from "@chakra-ui/react";

export const TimeInput = () => {
  return (
    <Container>
      <FormControl marginBottom={10}>
        <FormLabel htmlFor="time">Work interval</FormLabel>
        <NumberInput step={5} defaultValue={25} min={15} max={60}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText>Duration of your work time interval.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="time">Work interval</FormLabel>
        <NumberInput step={5} defaultValue={25} min={15} max={60}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText>Duration of your work time interval.</FormHelperText>
      </FormControl>
    </Container>
  );
};
