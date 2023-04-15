import { Container, FlatList, VStack } from "native-base"
import React from "react"
import { useEffect } from "react"
//@ts-ignore
import { API_URL } from "@env"
import { ITheCat } from "../../interface"
import axios from "axios"
import { SeeMoreListCatCard } from "../../components/SeeMoreListCatCard"

type fetchData = {
  dataTheCat?: Array<ITheCat>
}

export const SeeMoreListCat = ({ dataTheCat }: fetchData) => {
  const [data, setData] = React.useState(dataTheCat)
  const [size, setSize] = React.useState(10)

  const fetchMoreData = () => {
    setSize(size + 10)
    // setData((prevState) => [
    //   ...prevState,
    //   ...Array.from({ length: 10 }).map((_, i) => i + 1 + prevState.length),
    // ])
  }
  useEffect(() => {
    axios
      .get(`${API_URL}/breeds`)
      .then(function (response) {
        setData(response.data.slice(0, size))
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [size])

  console.log(size)
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
      <VStack mt={5} width={"full"}>
        <FlatList
          width={"full"}
          data={data}
          renderItem={(item) => {
            return (
              <SeeMoreListCatCard
                key={item.index}
                listCard={item.item}
                index={item.index}
              />
            )
          }}
          _contentContainerStyle={{ flexGrow: 1 }}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreData}
        />
      </VStack>
    </Container>
  )
}
