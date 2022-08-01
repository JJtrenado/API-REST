import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

// endpoints
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id))

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  // tenemos que comprobar que lo ue le estamos pasando son los valores del tipo que esperamos
  try {
    // la id no hace falta porque la generamos nosotros
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
