const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Chaper 2: The Tale of Inspector Legrasse'
        },
        partials: {
            partial: 'partial-chapter-2'
        }
    });
});

module.exports = router;