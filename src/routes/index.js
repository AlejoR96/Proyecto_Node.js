const express = require('express');
const router = express.Router();

// Routes of pages
router.get('/', (req, res) => {

    res.render('index.html', {title: "First Website"});   
});

router.get('/contact', (req, res) => {
    
    res.render('contact.html', {title: 'Contact page'});
});
module.exports = router;