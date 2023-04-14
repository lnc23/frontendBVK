import axios from "axios"
import React, { useEffect } from "react"
//@ts-ignore
import { API_URL } from "@env"
import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Input,
  ScrollView,
  SearchIcon,
  Text,
  Toast,
  VStack,
  useToast,
} from "native-base"
import { ITheCat } from "../../interface"
import { Pressable } from "react-native"

type fetchData = {
  dataTheCat?: Array<ITheCat>
}

export const Home = ({ dataTheCat }: fetchData) => {
  const [data, setData] = React.useState(dataTheCat)
  const [isLoading, setIsLoading] = React.useState(false)
  const [dataSearch, setDataSearch] = React.useState(dataTheCat)
  const [isSearch, setIsSearch] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [filter, setFilter] = React.useState<String>("name")
  const toast = useToast()

  useEffect(() => {
    axios
      .get(`${API_URL}/breeds`)
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (search) {
      if (filter === "name") {
        const datasearch = data?.filter((item) =>
          item.name?.toLocaleLowerCase().includes(search.toLowerCase())
        )
        setDataSearch(datasearch)
      } else if (filter === "origin") {
        const datasearch = data?.filter((item) =>
          item.origin?.toLocaleLowerCase().includes(search.toLowerCase())
        )
        setDataSearch(datasearch)
      } else if (filter === "temperament") {
        const datasearch = data?.filter((item) =>
          item.temperament?.toLocaleLowerCase().includes(search.toLowerCase())
        )
        setDataSearch(datasearch)
      }
    } else {
      setDataSearch([])
    }
  }, [search, filter])

  return (
    <Container
      width={"100%"}
      maxW={"100%"}
      height={"100%"}
      flex={1}
      alignItems={"center"}
      bg={"#131313"}
      px={5}
    >
      <ScrollView width={"100%"} height={"100%"}>
        <VStack flex={1} width={"full"}>
          <Input
            onChangeText={(e) => setSearch(e)}
            flex={1}
            placeholder="Search"
            placeholderTextColor={"white"}
            variant="filled"
            width="auto"
            color={"white"}
            borderColor={"orange.600"}
            bg={"gray.800"}
            borderRadius="10"
            py="2"
            px="2"
            InputLeftElement={<SearchIcon size={6} ml={3} color="orange.600" />}
          />

          <Text mt={1} color={"white"}>
            Filter Search By
          </Text>
          <HStack my={2} space={5}>
            <Pressable onPress={() => setFilter("name")}>
              <Box
                bg={"gray.800"}
                p={2}
                borderWidth={1}
                borderRadius={6}
                borderColor={filter === "name" ? "orange.600" : "gray.400"}
              >
                <Text color={"white"}>Cat Name</Text>
              </Box>
            </Pressable>
            <Pressable onPress={() => setFilter("origin")}>
              <Box
                bg={"gray.800"}
                p={2}
                borderWidth={1}
                borderRadius={6}
                borderColor={filter === "origin" ? "orange.600" : "gray.400"}
              >
                <Text color={"white"}>Origin</Text>
              </Box>
            </Pressable>
            <Pressable onPress={() => setFilter("temperament")}>
              <Box
                bg={"gray.800"}
                p={2}
                borderWidth={1}
                borderRadius={6}
                borderColor={
                  filter === "temperament" ? "orange.600" : "gray.400"
                }
              >
                <Text color={"white"}>Temperament</Text>
              </Box>
            </Pressable>
          </HStack>

          {dataSearch?.length! > 0 ? (
            <VStack space={2}>
              <HStack mt={5} flex={1} alignItems={"center"}>
                <Text
                  fontSize={"lg"}
                  color={"white"}
                  fontWeight={"bold"}
                  flex={1}
                >
                  Your Search
                </Text>
                <Text
                  fontSize={"sm"}
                  color={"orange.600"}
                  fontWeight={"medium"}
                >
                  See More
                </Text>
              </HStack>
              {dataSearch?.slice(0, 5).map((item, index) => (
                <Pressable key={index} onPress={() => console.log("test")}>
                  <Box
                    w={"full"}
                    bg={"gray.800"}
                    p={3}
                    rounded={"xl"}
                    shadow={"9"}
                  >
                    <HStack alignItems={"center"}>
                      <VStack space={2} flex={1} mr={2}>
                        <Text color={"white"} fontSize={"sm"} noOfLines={1}>
                          Cat Name: {item.name}
                        </Text>
                        <Text color={"white"} fontSize={"sm"} noOfLines={1}>
                          Origin : {item.origin}
                        </Text>
                        <Text color={"white"} fontSize={"sm"} noOfLines={1}>
                          Temprament : {item.temperament}
                        </Text>
                      </VStack>
                      <Text color={"orange.600"} fontSize={"sm"}>
                        See Detail
                      </Text>
                    </HStack>
                  </Box>
                </Pressable>
              ))}
            </VStack>
          ) : null}
          <HStack mt={10} flex={1} alignItems={"center"}>
            <Text fontSize={"lg"} color={"white"} fontWeight={"bold"} flex={1}>
              List Cat
            </Text>
            <Text fontSize={"sm"} color={"orange.600"} fontWeight={"medium"}>
              See More
            </Text>
          </HStack>
          <VStack mt={5} space={2}>
            {data?.slice(0, 5).map((item, index) => (
              <Pressable key={index} onPress={() => console.log("test")}>
                <Box
                  w={"full"}
                  bg={"gray.800"}
                  p={3}
                  rounded={"xl"}
                  shadow={"9"}
                >
                  <HStack alignItems={"center"}>
                    <VStack space={2} flex={1} mr={2}>
                      <Text color={"white"} fontSize={"sm"} noOfLines={1}>
                        Cat Name: {item.name}
                      </Text>
                      <Text color={"white"} fontSize={"sm"} noOfLines={1}>
                        Origin : {item.origin}
                      </Text>
                      <Text color={"white"} fontSize={"sm"} noOfLines={1}>
                        Temprament : {item.temperament}
                      </Text>
                    </VStack>
                    <Text color={"orange.600"} fontSize={"sm"}>
                      See Detail
                    </Text>
                  </HStack>
                </Box>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  )
}
