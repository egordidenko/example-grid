import "./App.css";

import * as UC from "@uploadcare/file-uploader";
import "@uploadcare/file-uploader/web/uc-file-uploader-minimal.min.css";

UC.defineComponents(UC);

function App() {
  return (
    <main>
      <section className='uploader-a-r-1-1'>
        <uc-config
          filesViewMode='grid'
          ctx-name='my-uploader-1'
          pubkey='aadfab151dfea016a1b0'
        ></uc-config>
        <uc-file-uploader-minimal ctx-name='my-uploader-1'></uc-file-uploader-minimal>
      </section>
    </main>
  );
}

export default App;
