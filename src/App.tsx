import "./App.css";

import * as UC from "@uploadcare/file-uploader";
import "@uploadcare/file-uploader/web/uc-file-uploader-minimal.min.css";
import { useEffect, useRef } from "react";

UC.defineComponents(UC);

function App() {
  const configRef = useRef<InstanceType<UC.Config>>(null);
  useEffect(() => {
    if (configRef?.current) {
      configRef.current.localeDefinitionOverride = {
        en: {
          done: "Upload",
        },
      };
    }
  }, []);

  return (
    <main>
      <section className='uploader-a-r-1-1'>
        <uc-config
          ref={configRef}
          filesViewMode='grid'
          ctx-name='my-uploader-1'
          pubkey='aadfab151dfea016a1b0'
          useCloudImageEditor={false}
        ></uc-config>
        <uc-file-uploader-minimal ctx-name='my-uploader-1'></uc-file-uploader-minimal>
      </section>
    </main>
  );
}

export default App;
