import express from 'express'

const router = express.Router()

// vamos a tener dos endpoints
router.get('/', (_req, res) => {
  res.send('Fetchind all entry diaries')
})
router.post('/', (_req, res) => {
  res.send('Savind a diariy')
})

export default router
