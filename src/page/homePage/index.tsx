import React, { useEffect, useState } from 'react'
// import UserInput from './components/inputUser'
import { SalesChannel, UserInputType } from './common/interface'
import UserInput from './components/inputUser'
import AgentInput from './components/channel/Agent'
import EComInput from './components/channel/ECommerce'
import ShopInput from './components/channel/Shop'
import WebInput from './components/channel/WebFacebookZalo'
import { Box } from '@mui/material'
import CarouselAnt from './components/top'
import Masonry from './components/animation'
const Home: React.FC = () => {
  const [userData, setUserData] = useState<UserInputType | null>(null)
  const [isSliding, setIsSliding] = useState<boolean>(false) // State for sliding effect
  const [channel, setChannel] = useState<string>('default')

  const handleUserInput = (data: UserInputType) => {
    console.log('Dữ liệu từ UserInput:', data.type)
    setChannel(data.type)
    setUserData(data)
  }
  const [renderComponent, setInputComponent] = useState<JSX.Element>(<UserInput onInputSubmit={handleUserInput} />)
  useEffect(() => {
    // Start sliding effect
    setIsSliding(true)

    // Determine the input component based on the channel
    let newComponent: JSX.Element
    switch (channel) {
      case SalesChannel.Agent:
        newComponent = <AgentInput onInputSubmit={handleUserInput} />
        break
      case SalesChannel.ECommerce:
        newComponent = <EComInput onInputSubmit={handleUserInput} />
        break
      case SalesChannel.Shop:
        newComponent = <ShopInput onInputSubmit={handleUserInput} />
        break
      case SalesChannel.WebFacebookZalo:
        newComponent = <WebInput onInputSubmit={handleUserInput} />
        break
      case 'default':
      default:
        newComponent = <UserInput onInputSubmit={handleUserInput} />
    }

    // After a brief delay to allow the sliding effect to complete, change the component
    const timeoutId = setTimeout(() => {
      setInputComponent(newComponent)
      setIsSliding(false)
    }, 500) // Duration should match the CSS transition duration

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId)
  }, [userData, channel])
  return (
    <main>
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: 'fit-content'
        }}
      >
        <CarouselAnt />
      </Box>
      <div className={`input-container ${isSliding ? 'slide-out' : ''}`}>{renderComponent}</div>
      {isSliding && <div className={`input-container slide-in`}>{renderComponent}</div>}
      <Masonry/>
    </main>
  )
}

export default Home
