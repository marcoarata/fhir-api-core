
import express from 'express'
/** @type {{practitioner: Array}} */
import data from '../data/index.js'

const practitionerController = express.Router()

// --> ver en 'http://localhost:4000/fhir/Practitioner' - ?gender=male ?gender=female
practitionerController.get('/', (req, res) => {

    const { gender } = req.query

    if (gender){

        const search = data.practitioner.filter(practitioner => practitioner.resource["gender"] === gender)
        res.json(search)

    }

    else {
        res.json(data.practitioner)
    }

})

// --> ver en 'http://localhost:4000/fhir/Practitioner' - /id
practitionerController.get('/:id', (req, res) => {

    const id = req.params.id

    const search = data.practitioner.find(practitioner => practitioner.resource["id"] === id)

    res.json(search)

})

export default practitionerController