import { Box, FormControl, FormHelperText, Input, InputLabel, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SalesChannel, UserInputType } from '../../common/interface'
interface UserInputProps {
  onInputSubmit: (data: UserInputType) => void
}
const UserInput: React.FC<UserInputProps> = ({ onInputSubmit }) => {
  const [fullName, setFullName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [selectedChannel, setSelectedChannel] = useState<SalesChannel | null>(null)
  const [errors, setErrors] = useState<{
    fullName: boolean
    phoneNumber: boolean
    phoneNumberInvalid: boolean
    selectedChannel: boolean
  }>({
    fullName: false,
    phoneNumber: false,
    phoneNumberInvalid: false,
    selectedChannel: false
  })
  const phoneRegex = /^[0-9]{10,11}$/

  const handleSubmit = () => {
    const newErrors = {
      fullName: fullName === '',
      phoneNumber: phoneNumber === '',
      phoneNumberInvalid: !phoneRegex.test(phoneNumber),
      selectedChannel: selectedChannel === null
    }
    setErrors(newErrors)

    if (!newErrors.fullName && !newErrors.phoneNumber && !newErrors.phoneNumberInvalid && !newErrors.selectedChannel) {
      const inputValue = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        type: SalesChannel[selectedChannel as keyof typeof SalesChannel] || 'Shop'
      }
      console.log(SalesChannel[selectedChannel as keyof typeof SalesChannel])
      if (inputValue) {
        onInputSubmit(inputValue)
      }
    } else {
      if (newErrors.fullName) document.getElementById('fullName')?.focus()
      else if (newErrors.phoneNumber || newErrors.phoneNumberInvalid) document.getElementById('phoneNumber')?.focus()
      else if (newErrors.selectedChannel) document.getElementById('channel')?.focus()
    }
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: {
          xs: 'linear-gradient(140deg, #8b8fef 30%, #fff 50%)', // cho mobile
          lg: 'linear-gradient(150deg, #8b8fef 30%, #fff 50%)' // cho PC
        }
      }}
    >
      <Box
        sx={{
          width: '70vw',
          height: '80vh',
          borderRadius: '50px',
          boxShadow: '-4px 0px 10px 10px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)',
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: {
            xs: 'linear-gradient(-43deg, #8b8fef 50%, #fff 50%)', // cho mobile
            lg: 'linear-gradient(-30deg, #8b8fef 50%, #fff 50%)' // cho PC
          }
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 600,
              fontSize: '1.3rem',
              maxWidth: '80%',
              lineHeight: 1.5,
              letterSpacing: '0.00938em',
              color: '#000',
              display: 'block',
              textAlign: 'center',
              margin: '20px 0px'
            }}
          >
            XÁC NHẬN THÔNG TIN THAM GIA CHƯƠNG TRÌNH QUAY SỐ MAY MẮN
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              width: '80%',
              height: '80%',
              background: '#fff',
              padding: '20px',
              borderRadius: '30px',
              border: '2px solid #a591d8'
            }}
          >
            <FormControl variant='standard' error={errors.fullName}>
              <InputLabel htmlFor='fullName'>Họ và tên (*)</InputLabel>
              <Input id='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} />
              {errors.fullName && <FormHelperText>Lỗi: Cần nhập họ và tên</FormHelperText>}
            </FormControl>

            <FormControl variant='standard' error={errors.phoneNumber || errors.phoneNumberInvalid}>
              <InputLabel htmlFor='phoneNumber'>Số điện thoại (*)</InputLabel>
              <Input id='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              {errors.phoneNumber && <FormHelperText>Lỗi: Cần nhập số điện thoại</FormHelperText>}
              {errors.phoneNumberInvalid && <FormHelperText>Lỗi: Số điện thoại không hợp lệ</FormHelperText>}
            </FormControl>

            <TextField
              id='channel'
              select
              label='Kênh bán hàng (*)'
              value={selectedChannel ?? ''}
              onChange={(e) => setSelectedChannel(e.target.value as SalesChannel)}
              error={errors.selectedChannel}
            >
              {Object.entries(SalesChannel).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                  {value}
                </MenuItem>
              ))}
            </TextField>
            {errors.selectedChannel && <FormHelperText error>Lỗi: Trường này là bắt buộc</FormHelperText>}
            <button onClick={handleSubmit}>Tiếp tục</button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UserInput
