
import express from 'express'
/** @type {{practitionerRole: Array}} */
import data from '../data/index.js'

const practitionerRoleController = express.Router()

// --> ver en 'http://localhost:4000/fhir/PractitionerRole' - ?gender=male ?gender=female
practitionerRoleController.get('/', (req, res) => {

    const { gender } = req.query

    if (gender){

        const search = data.practitionerRole.filter(practitionerRole => practitionerRole.resource["gender"] === gender)
        res.json(search)

    }

    else {
        res.json(data.practitionerRole)
    }

})

// --> ver en 'http://localhost:4000/fhir/PractitionerRole' - /id
practitionerRoleController.get('/:id', (req, res) => {

    const id = req.params.id

    const search = data.practitionerRole.find(practitionerRole => practitionerRole.resource["id"] === id)

    res.json(search)

})

export default practitionerRoleController