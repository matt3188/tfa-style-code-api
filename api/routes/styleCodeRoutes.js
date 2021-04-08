module.exports = function(app) {
  const styleCode = require('../controllers/styleCodeController');

  app.route('/style-codes')
    .get(styleCode.list_all_style_codes)
    .post(styleCode.create_style_code)
    .delete(styleCode.delete_all)

  app.route('/style-codes/:styleCodeId')
    .get(styleCode.read_style_code)
    .put(styleCode.update_style_code)
    .delete(styleCode.delete_style_code)
};
