import { Box, FormControl, FormHelperText, Input, InputLabel, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ECommerce, UserInputType } from '../../common/interface'
import TransitionsModal from '../thanks'
interface UserInputProps {
  onInputSubmit: (data: UserInputType) => void
}
const WebInput: React.FC<UserInputProps> = ({ onInputSubmit }) => {
  const [open, setOpen] = React.useState<boolean>(false)

  const handleClose = () => setOpen(false)

  const eCommerceOptions = [
    { value: ECommerce.LAZADA, label: 'WEB' },
    { value: 'tiki', label: 'FACEBOOK' },
    { value: 'shopee', label: 'ZALO' },
    { value: 'dai-ly-1', label: 'WEB/FACEBOOK/ZALO' },
  ]

  const [valueOrder, setValueOrder] = useState<string>('')

  const defaultChannel = eCommerceOptions[0]?.value || 'dai-ly-1' // Hoặc bạn có thể thay thế bằng một giá trị string khác

  // Đảm bảo rằng selectedChannel được khởi tạo với kiểu string
  const [selectedChannel, setSelectedChannel] = React.useState<string>(String(defaultChannel))

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChannel(event.target.value)
  }

  const [errors, setErrors] = useState<{
    valueOrder: boolean
    isNumber: boolean
    selectedChannel: boolean
  }>({
    valueOrder: false,
    isNumber: false,
    selectedChannel: false
  })
  const handleClick = () => {
    const inputValue = {
      fullName: 'fullName',
      phoneNumber: 'phoneNumber',
      type: 'default'
    }
    if (inputValue) {
      onInputSubmit(inputValue)
    }
  }
  const handleSubmit = () => {
    const newErrors = {
      valueOrder: valueOrder === '',
      isNumber: !Number(valueOrder.toString().trim()),
      selectedChannel: selectedChannel === null
    }

    setErrors(newErrors)

    if (!newErrors.isNumber && !newErrors.valueOrder) {
      console.log('oke')
      setOpen(true)
    } else {
      if (newErrors.valueOrder || newErrors.valueOrder) document.getElementById('valueOrder')?.focus()
      else if (newErrors.isNumber) document.getElementById('valueOrder')?.focus()
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
          width: {
            xs: '90vw', // Chiều rộng cho mobile
            md: '70vw'  // Chiều rộng cho desktop
          },
          height: {
            xs: '88vh', // Chiều cao cho mobile
            md: '80vh'  // Chiều cao cho desktop
          },
          borderRadius: '50px',
          boxShadow: '-4px 0px 10px 10px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)',
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: {
            xs: 'linear-gradient(-43deg, #8b8fef 50%, #fff 50%)', // cho mobile
            lg: 'linear-gradient(-30deg, #8b8fef 50%, #fff 50%)' // cho PC
          },
          position: 'absolute'
        }}
      >
        <Box
          sx={{
            position: 'relative',
            top: '20px',
            right: '42%',
            height: '50px',
            width: '50px',
            '&:hover': {
              // Các thuộc tính bạn muốn thay đổi khi hover
              backgroundColor: 'lightblue', // Ví dụ: thay đổi màu nền khi hover
              cursor: 'pointer' // Thay đổi con trỏ thành pointer khi hover
            }
          }}
          onClick={() => handleClick()}
        >
          <img
            style={{
              width: '100%'
            }}
            src='https://cdn-icons-png.freepik.com/512/2099/2099190.png'
            alt='back'
          />
        </Box>
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
              fontSize:{
                xs: '1rem', // Chiều rộng cho mobile
                md: '1.3rem'  // Chiều rộng cho desktop
              },
              maxWidth: '80%',
              lineHeight: 1.5,
              letterSpacing: '0.00938em',
              color: '#000',
              display: 'block',
              textAlign: 'center',
              margin: '20px 0px'
            }}
          >
            XÁC NHẬN ĐĂNG KÝ DỰ THƯỞNG
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
              width: {
                xs: '95%', // Chiều rộng cho màn hình nhỏ (mobile)
                md: '80%'  // Chiều rộng cho màn hình lớn hơn (tablet, desktop)
              },
              height: {
                xs: '95%', // Chiều cao cho màn hình nhỏ
                md: '80%'  // Chiều cao cho màn hình lớn
              },
              background: '#fff',
              padding: '20px',
              borderRadius: '30px',
              border: '2px solid #a591d8'
            }}
          >
            <TextField
              id='Ecom'
              select
              label='Đại lý'
              value={selectedChannel}
              onChange={handleChange}
              fullWidth // Để mở rộng chiều rộng của TextField
            >
              {eCommerceOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label} {/* Hiển thị nhãn thân thiện với người dùng */}
                </MenuItem>
              ))}
            </TextField>

            <FormControl variant='standard' error={errors.valueOrder || errors.isNumber}>
              <InputLabel htmlFor='phoneNumber'>Giá trị đơn hàng (*)</InputLabel>
              <Input id='valueOrder' value={valueOrder} onChange={(e) => setValueOrder(e.target.value)} />
              {errors.valueOrder && <FormHelperText>Lỗi: Cần nhập giá trị đơn hàng</FormHelperText>}
              {errors.isNumber && <FormHelperText>Lỗi: Giá trị không hợp lệ</FormHelperText>}
            </FormControl>
            {/* btn */}
            <button onClick={handleSubmit}>Tiếp tục</button>

            <TransitionsModal open={open} onClose={handleClose} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default WebInput
