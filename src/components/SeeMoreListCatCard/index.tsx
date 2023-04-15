import { HStack, Pressable, VStack, Text, Box } from "native-base"
import { ITheCat } from "../../interface"
import React from "react"

type listCatParam = {
  listCard: ITheCat
  index: any
}

export const SeeMoreListCatCard = ({ listCard, index }: listCatParam) => {
  const [isExpand, setIsExpand] = React.useState<any>([])

  const tempArrIsExpand = (index: any, item: boolean) => {
    const tempArr = [...isExpand]
    tempArr[index] = item
    setIsExpand(tempArr)
  }

  return (
    <Pressable
      mt={2}
      key={index}
      onPress={() => tempArrIsExpand(index, !isExpand[index])}
    >
      <Box w={"full"} bg={"gray.800"} p={3} rounded={"xl"} shadow={"9"}>
        <HStack
          alignItems={"center"}
          pb={2}
          borderBottomWidth={isExpand[index] ? 1 : 0}
          borderBottomColor={isExpand[index] ? "orange.600" : ""}
        >
          <VStack space={2} flex={1} mr={2}>
            <Text color={"white"} fontSize={"sm"} noOfLines={1}>
              Cat Name: {listCard.name}
            </Text>
            <Text color={"white"} fontSize={"sm"} noOfLines={1}>
              Origin : {listCard.origin}
            </Text>
            <Text
              color={"white"}
              fontSize={"sm"}
              noOfLines={isExpand[index] ? 5 : 1}
            >
              Temprament : {listCard.temperament}
            </Text>
          </VStack>
          <Text color={"orange.600"} fontSize={"sm"}>
            See Detail
          </Text>
        </HStack>
        {isExpand[index] ? (
          <Box pt={2}>
            <Text color={"white"} fontSize={"sm"} noOfLines={1}>
              Weight Imperial: {listCard.weight?.imperial}
            </Text>
            <Text color={"white"} fontSize={"sm"} noOfLines={1}>
              Weight Metric : {listCard.weight?.metric}
            </Text>
            <Text color={"white"} fontSize={"sm"} noOfLines={1}>
              Life Span : {listCard.life_span}
            </Text>
            <Text color={"white"} fontSize={"sm"} noOfLines={5}>
              Description : {listCard.description}
            </Text>
          </Box>
        ) : null}
      </Box>
    </Pressable>
  )
}
