const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Chaper 1: The Horror in Clay'
        },
        partials: {
            partial: 'partial-chapter-1'
        }
    });
});

module.exports = router;