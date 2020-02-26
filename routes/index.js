const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'The Call of Cthulhu'
        },
        partials: {
            partial: 'partial-index'
        }
    });
});

module.exports = router;