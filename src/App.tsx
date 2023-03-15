import './App.css';
import { useState } from "react";
import imgawe from '../src/images/logo.png';
import Loader from './Loader';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Loader Loader={show} img_path={imgawe} width="50" height="50" loadingTitle="Loading ..." animationType="elastic-spin" loadingTitleColor = "yellow" loadingTitleFontWeight = "bold" loadingTitleFontSize ="small" />
      <div >
        <div>Just after dark that day, when one watch had retired below, a clamor was heard in the forecastle; and the two trembling traitors running up, besieged the cabin door, saying they durst not consort with the crew. Entreaties, cuffs, and kicks could not drive them back, so at their own instance they were put down in the ship's run for salvation. Still, no sign of mutiny reappeared among the rest. On the contrary, it seemed, that mainly at Steelkilt's instigation, they had resolved to maintain the strictest peacefulness, obey all orders to the last, and, when the ship reached port, desert her in a body. But in order to insure the speediest end to the voyage, they all agreed to another thing&mdash;namely, not to sing out for whales, in case any should be discovered. For, spite of her leak, and spite of all her other perils, the Town-Ho still maintained her mast-heads, and her captain was just as willing to lower for a fish that moment, as on the day his craft first struck the cruising ground; and Radney the mate was quite as ready to change his berth for a boat, and with his bandaged mouth seek to gag in death the vital jaw of the whale.</div>
      </div>
    </div>
  );
}

export default App;
