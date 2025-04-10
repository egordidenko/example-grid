import { Fragment, useState } from "react";

import "./App.css";

import * as UC from "@uploadcare/file-uploader";
import "@uploadcare/file-uploader/web/uc-file-uploader-minimal.min.css";

UC.defineComponents(UC);

function App() {
  const [switcher, setSwitcher] = useState("list");

  const handleFilesViewMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSwitcher("grid");
      return;
    }
    setSwitcher("list");
  };

  return (
    <Fragment>
      <header></header>
      <main>
        <section>
          <h3>Default css properties</h3>
          <ol>
            <li>
              <pre>--uc-grid-col: 3</pre>
              <ul>
                <li>
                  <pre>Laptop: 3</pre>
                </li>
                <li>
                  <pre>Tablet: 2</pre>
                </li>
                <li>
                  <pre>Mobile: 1</pre>
                </li>
              </ul>
            </li>
            <li>
              <pre>--uc-grid-preview-image-height: auto</pre>
            </li>
            <li>
              <pre>--uc-grid-gap: calc(var(--uc-padding) / 2)</pre>
            </li>
            <li>
              <pre>--uc-grid-aspect-ratio: 1 / 1</pre>
            </li>
          </ol>
        </section>

        <section>
          <div className="row">
            <h3>List</h3>
            <label className="switch">
              <input type="checkbox" onChange={handleFilesViewMode} />
              <span className="slider round"></span>
            </label>
            <h3>Grid</h3>
          </div>
        </section>

        <section className="uploader-grid-col-5">
          <h2>File uploader minimal</h2>
          <h3>5-column grid</h3>
          <uc-config
            filesViewMode={switcher}
            ctx-name="my-uploader"
            pubkey="08561eaebb1c3bd9b12f"
          ></uc-config>
          <uc-file-uploader-minimal ctx-name="my-uploader"></uc-file-uploader-minimal>
        </section>

        <section className="uploader-a-r-16-9">
          <h2>File uploader minimal</h2>
          <h3>3-column grid with a 16:9 aspect ratio</h3>
          <uc-config
            filesViewMode={switcher}
            ctx-name="my-uploader-1"
            pubkey="08561eaebb1c3bd9b12f"
          ></uc-config>
          <uc-file-uploader-minimal ctx-name="my-uploader-1"></uc-file-uploader-minimal>
        </section>

        <section>
          <h2>File uploader minimal</h2>
          <h3>3-column grid with a gridShowFilesNames</h3>
          <uc-config
            filesViewMode={switcher}
            gridShowFileNames="true"
            ctx-name="uploader-grid-show-file-names"
            pubkey="08561eaebb1c3bd9b12f"
          ></uc-config>
          <uc-file-uploader-minimal ctx-name="uploader-grid-show-file-names"></uc-file-uploader-minimal>
        </section>

        <section className="single-uploader">
          <h2>File uploader minimal</h2>
          <h3>Single upload</h3>
          <uc-config
            filesViewMode={switcher}
            multiple="false"
            ctx-name="single-uploader"
            pubkey="08561eaebb1c3bd9b12f"
          ></uc-config>
          <uc-file-uploader-minimal ctx-name="single-uploader"></uc-file-uploader-minimal>
        </section>

        <section className="single-uploader">
          <h2>File uploader minimal</h2>
          <h3>
            Single upload and <pre>sourceList="local"</pre>
          </h3>
          <uc-config
            filesViewMode={switcher}
            sourceList="local"
            multiple="false"
            ctx-name="single-uploader-local"
            pubkey="08561eaebb1c3bd9b12f"
          ></uc-config>
          <uc-file-uploader-minimal ctx-name="single-uploader-local"></uc-file-uploader-minimal>
        </section>
      </main>
    </Fragment>
  );
}

export default App;
