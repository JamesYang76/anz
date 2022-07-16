import app from "./app.js"
import { PORT } from "./constants.js";

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
