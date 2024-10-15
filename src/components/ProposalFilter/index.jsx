// @flow
import { memo } from 'react';
import {
  HStack,
  Text,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const ProposalFilter = () => {
  const { popFont } = useStyles();

  // const allMaterials = [];

  return (
    <HStack w={'100%'} p="60px" mt="-50px">
      {/* -----------------------------------------------------DIVIDE----------------------------------------------- */}
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FaSearch} color="#fff" />}
        />
        <Input
          placeholder="Search protocols"
          borderRadius="24px"
          border="1px solid #CFC4C5"
          width={'50%'}
          _placeholder={{ color: '#e9ecef' }}
          color={'#e9ecef'}
        />
      </InputGroup>

      <Text {...popFont}>FilterbyStatus:</Text>

      {/* Select one */}
      <Select
        placeholder="All"
        _placeholder={{ color: '#e9ecef' }}
        width={'20%'}
        color={'#e9ecef'}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </HStack>
  );
};

export default memo(ProposalFilter);

const useStyles = () => {
  return {
    root: {
      h: '36px',
      pr: '20px',
      _hover: {
        background: 'black',
        color: 'white',
      },
    },
    popFont: {
      fontSize: '18px',
      color: '#000000',
      fontWeight: '500',
    },
  };
};
