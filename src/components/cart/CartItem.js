import React, { useState, useContext, useEffect } from "react";

import { HStack, Flex, Spacer, chakra, Box, Divider } from "@chakra-ui/react";

import DeleteButton from "../buttons/DeleteButton";

const CartItem = (props) => {
  return (
    <Box>
      <Flex direction="row">
        <Flex direction="column" width="80vw" paddingBottom="2">
          <HStack paddingLeft="5" align="center">
            <chakra.h3 fontSize="md" color="background" paddingTop="2">
              {props.item.shopItemName}
            </chakra.h3>
            <Spacer />
            <chakra.h3 fontSize="md" color="background">
              SGD {props.item.value}
            </chakra.h3>
          </HStack>

          <Flex
            direction="row"
            paddingLeft="10"
            width={["60vw", "40vw"]}
            paddingTop="2"
          >
            <chakra.h3 fontSize="md" color="background">
              Quantity
            </chakra.h3>
            <Spacer />
            <chakra.h3 fontSize="md" color="background">
              {props.item.quantity}
            </chakra.h3>
          </Flex>
          <Flex
            direction="row"
            paddingLeft="10"
            width={["60vw", "40vw"]}
            paddingTop="2"
          >
            <chakra.h3 fontSize="md" color="background">
              Option
            </chakra.h3>
            <Spacer />
            <chakra.h3 fontSize="md" color="background">
              {props.item.variant}
            </chakra.h3>
          </Flex>
        </Flex>
        <Spacer />
        <DeleteButton onClick={() => props.handleRemove(props.index)} />
      </Flex>
      <Divider />
    </Box>
  );
};
export default CartItem;
