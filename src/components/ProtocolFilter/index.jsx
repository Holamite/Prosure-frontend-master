// @flow
import { memo } from "react";
import {
  HStack,
  Text,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const ProtocolFilter = () => {


  const { popFont } = useStyles();

  // const allMaterials = [];

  return (
    <HStack w={"100%"} p="60px">
      {/* -----------------------------------------------------DIVIDE----------------------------------------------- */}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FaSearch} color="1C1B1F" />}
          />
          <Input
            placeholder="Search protocols"
            borderRadius="24px"
            border="1px solid #CFC4C5"
            width={"50%"}
            _placeholder={{ color: "1C1B1F" }}
          />
        </InputGroup>

            <Text {...popFont}>Filterby:</Text>
        
          {/* Select one */}
          <Select placeholder='Chain type' _placeholder={{ color: "#49454F"}} width={"30%"}
           _focus={{ boxShadow: "none" }}
          >
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>

        {/* Select Two */}
            <Select placeholder='Risk type' _placeholder={{ color: "#49454F"}} width={"30%"}
             _focus={{ boxShadow: "none" }}
            >
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>

    </HStack>
  );
};

export default memo(ProtocolFilter);

const useStyles = () => {
  return {
    root: {
      h: "36px",
      pr: "20px",
      _hover: {
        background: "black",
        color: "white",
      },
    },
    popFont: {
      fontSize: "18px",
      color: "#000000",
      fontWeight: "500"
    },
  };
};
