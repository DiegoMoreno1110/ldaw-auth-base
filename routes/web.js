let router = require('express').Router();
let homepageController = require('../controllers/HomepageController');
let authController = require('../controllers/AuthController');
let authValidator = require('../validators/AuthValidator');
let passport = require('passport');
let permissionsMiddleware = require('../controllers/PermissionsMiddleware');

router.get('/', homepageController.index, permissionsMiddleware.Authenticated);

// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);

router.get('/dashboardUsers',  permissionsMiddleware.Authenticated,  permissionsMiddleware.acccessDashBoardUsers, homepageController.dashboardUsers);
router.get('/usersList', permissionsMiddleware.Authenticated, permissionsMiddleware.accessUsersList, homepageController.usersList);


router.post('/register', authValidator.store , authController.store);

router.post('/login', passport.authenticate('local', { failureRedirect: '/login-fail', successRedirect: '/protected' }));

router.get('/protected', permissionsMiddleware.redirectLogin);

router.get('/login-fail', (req, res) => {
  res.send('El usuario no tiene una sesión válida');
});


// validators funcionan como middleware

module.exports = router;
