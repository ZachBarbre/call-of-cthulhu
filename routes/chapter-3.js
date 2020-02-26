const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Chaper 3: The Madness from the Sea'
        },
        partials: {
            partial: 'partial-chapter-3'
        }
    });
});

module.exports = router;