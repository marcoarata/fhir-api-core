
import express from 'express'
/** @type {{patient: Array}} */
import data from '../data/index.js'

const patientController = express.Router()

// --> ver en 'http://localhost:4000/fhir/Patient' - ?gender=male ?gender=female
patientController.get('/', (req, res) => {

    const { gender } = req.query

    if (gender){

        const search = data.patient.filter(patient => patient.resource["gender"] === gender)
        res.json(search)

    }

    else {
        res.json(data.patient)
    }

})

// --> ver en 'http://localhost:4000/fhir/Patient' - /id
patientController.get('/:id', (req, res) => {

    const id = req.params.id

    const search = data.patient.find(patient => patient.resource["id"] === id)

    res.json(search)

})

export default patientController