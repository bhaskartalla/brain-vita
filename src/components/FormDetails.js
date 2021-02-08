import React, { useState, useEffect } from "react"
import styled from "styled-components"

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

const InputWrapper = styled.div`
  width: 300px;
  height: 40px;
  margin: 0 16px;
`

const ErrorMsg = styled.label`
  font-size: 14px;
  font-family: monospace;
  color: red;
  margin-left: 6px;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding: 6px 8px;
  border-radius: 12px;
  border: 1px solid darkturquoise;
  font-family: monospace;
  outline: none;
  border: ${(props) => (props.isError ? "2px solid red" : "1px solid black")};
`

const Label = styled.label`
  font-size: 24px;
  font-family: monospace;
`

const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 12px;
  outline: none;
  border: 1px solid darkturquoise;
`

const FormDetails = (props) => {
  const [username, setUsername] = useState("")
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsError(false)
    }, 3000)

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isError])

  const handleInputChange = (e) => {
    e.persist()
    setUsername(e.target.value)
  }

  const handleSubmitClick = (e) => {
    // console.log("handleSubmitClick")
    e.preventDefault()
    if (username === "") {
      setIsError(true)
    } else {
      props.handleSubmit(username)
    }
    setUsername("")
  }

  return (
    <FormWrapper>
      <Label>Enter name</Label>
      <InputWrapper>
        <Input
          placeholder='Player Name'
          type='text'
          value={username}
          onChange={handleInputChange}
          isError={isError}
        />
        {isError && <ErrorMsg>Please enter valid Player name</ErrorMsg>}
      </InputWrapper>

      <SubmitButton type='submit' onClick={handleSubmitClick}>
        Submit
      </SubmitButton>
    </FormWrapper>
  )
}

export default FormDetails
