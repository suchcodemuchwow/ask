import axios from 'axios'
import Parser from 'html-react-parser'
import { Box, Button, Heading, HStack, Input, NativeBaseProvider, Spinner } from 'native-base'
import React, { useState } from 'react'

type IAnswer = { answer: string; chunkId: string; confidence: number }

const Answer = React.memo(({ chunk }: { chunk: IAnswer }) => {
  return (
    <Box bg="white" p="12" mb="2">
      <Heading fontSize="2xl">{Parser(chunk.answer)}</Heading>
      <Heading fontSize="sm">Confidence Level: {chunk.confidence}</Heading>
    </Box>
  )
})

export default function App() {
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState<IAnswer[]>([])
  const [loading, setLoading] = useState(false)

  const handleQuestionSubmit = async () => {
    setLoading(true)

    const response = await axios.post(
      'http://localhost:3000/api/questions',
      { body: question },
      {
        headers: {
          'Access-Control-Allow-Credentials': true
        }
      }
    )

    setLoading(false)
    setAnswers(response.data)
    setQuestion('')
  }

  return (
    <NativeBaseProvider>
      <Box h="full" w="full">
        <Box bg="gray.300" w="full" p="2">
          <Box bg="white" p="12" mb="2">
            <HStack>
              <Input w="90%" value={question} onChangeText={setQuestion}></Input>
              <Button onPress={handleQuestionSubmit}>Search</Button>
            </HStack>
          </Box>
          {loading && <Spinner accessibilityLabel="Loading posts" />}
          {answers.map((answer, index) => (
            <Answer chunk={answer} key={answer.chunkId} />
          ))}
        </Box>
      </Box>
    </NativeBaseProvider>
  )
}
