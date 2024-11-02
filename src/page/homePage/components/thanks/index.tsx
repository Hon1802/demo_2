import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '30px',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4
}

// Định nghĩa kiểu props cho TransitionsModal
interface TransitionsModalProps {
  open: boolean
  onClose: () => void
}

const TransitionsModal: React.FC<TransitionsModalProps> = ({ open, onClose }) => {
  const generateLotteryCode = (): string => {
    const lotteryNumbers: Set<number> = new Set()

    // Tạo 6 số ngẫu nhiên
    while (lotteryNumbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 10) // Tạo số ngẫu nhiên từ 0 đến 9
      lotteryNumbers.add(randomNumber) // Sử dụng Set để tự động loại bỏ số trùng lặp
    }

    return Array.from(lotteryNumbers).join('') // Chuyển đổi Set thành mảng và sau đó thành chuỗi
  }

  // Ví dụ sử dụng hàm
  const lotteryCode = generateLotteryCode()
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id='transition-modal-title'
            variant='h6'
            component='h2'
            sx={{
              color: '#000'
            }}
          >
            Cảm ơn vì đã tham gia chương trình
          </Typography>
          <img
            style={{
              width: '100%'
            }}
            src='https://media.istockphoto.com/id/1503356178/vector/thank-you-black-lettering-phrase-design-element-vector-illustration.jpg?s=612x612&w=0&k=20&c=M4KPML04isucpZzPD5va1yZH-XLQelPGHGMuaHG_XQg='
            alt='thank'
          />
          <Typography id='transition-modal-description' sx={{ mt: 2, color: '#000' }}>
            Mã dự thưởng của bạn là {lotteryCode}
          </Typography>
          {/* <Button
            sx={{
              border: '1px solid #090909'
            }}
            onClick={onClose}
          >
            Đóng
          </Button> */}
        </Box>
      </Fade>
    </Modal>
  )
}

export default TransitionsModal
