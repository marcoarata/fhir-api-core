import express from 'express'

import patientController from '../controllers/patient.controller.js'
import practitionerController from '../controllers/practitioner.controller.js'
import practitionerRoleController from '../controllers/practitionerRole.controller.js'

function routerApp(app) {

    const router = express.Router()
    app.use('/fhir', router)
    router.use('/Patient', patientController)
    router.use('/Practitioner', practitionerController)
    router.use('/PractitionerRole', practitionerRoleController)

}

export default routerApp
