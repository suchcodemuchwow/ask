import { Box, Button, Heading, HStack, Input, NativeBaseProvider } from 'native-base'
import React, { useState } from 'react'

type IAnswer = { answer: string; chunkId: string; confidence: number }

const Answer = React.memo(({ chunk }: { chunk: IAnswer }) => {
  return (
    <Box bg="white" p="12" mb="2">
      <Heading fontSize="2xl">{chunk.answer}</Heading>
      <Heading fontSize="sm">{chunk.confidence}</Heading>
    </Box>
  )
})

export default function App() {
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState<IAnswer[]>([])

  const handleQuestionSubmit = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'no-cors',
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      body: JSON.stringify({ body: 'How do I remove a teammate?' })
    }

    const response = await fetch('http://localhost:3000/api/questions', requestOptions)

    // setAnswers(data)
    // setQuestion('')
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
          {answers.map((answer, index) => (
            <Answer chunk={answer} key={answer.chunkId} />
          ))}
        </Box>
      </Box>
    </NativeBaseProvider>
  )
}
