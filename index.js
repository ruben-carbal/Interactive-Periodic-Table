const { info } = require('./utils/logger');
const app = require('./app');

const PORT = 3001;
app.listen(PORT, () => {
  info(`Server running on PORT ${PORT}`);
});
