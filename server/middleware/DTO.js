const yup = require('yup');

exports.taskCreateDTO = yup.object().shape({
    description: yup.string().required(),
})

