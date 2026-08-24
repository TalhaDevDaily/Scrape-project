import { useEffect, useState } from "react";
import { FaBolt, FaCheckCircle, FaCopy, FaDownload, FaKey } from "react-icons/fa";

const Checker = () => {
  const [activeTool, setActiveTool] = useState(() => window.location.hash === "#2fa" ? "twofa" : "checker");
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  const lines = value.split("\n").map((line) => line.trim()).filter(Boolean);

  useEffect(() => {
    const syncTool = () => setActiveTool(window.location.hash === "#2fa" ? "twofa" : "checker");
    window.addEventListener("hashchange", syncTool);
    return () => window.removeEventListener("hashchange", syncTool);
  }, []);

  const selectTool = (tool) => {
    setActiveTool(tool);
    window.history.replaceState(null, "", tool === "twofa" ? "#2fa" : window.location.pathname);
    setValue("");
    setChecked(false);
  };

  const handleCheck = () => {
    setChecked(true);
  };

  const handleClear = () => {
    setValue("");
    setChecked(false);
  };

  return (
    <div className="checker-page af-rise af-rise-3">
      <section className="af-panel af-content checker-tool">
        <div className="af-breadcrumb" aria-label="Breadcrumb">
          <span>Tools</span><span>/</span><span>Checker</span>
        </div>
        <header className="checker-tool__header">
          <p className="page-kicker">Account Factory / Utilities</p>
          <h1>Account checker &amp; 2FA</h1>
          <p>Bulk Facebook account status check and a one-time 2FA code generator.</p>
        </header>

        <div className="checker-tabs" role="tablist" aria-label="Checker tools">
          <button className={activeTool === "checker" ? "is-active" : ""} onClick={() => selectTool("checker")} role="tab" aria-selected={activeTool === "checker"}>
            <FaCheckCircle /> Account checker
          </button>
          <button className={activeTool === "twofa" ? "is-active" : ""} onClick={() => selectTool("twofa")} role="tab" aria-selected={activeTool === "twofa"}>
            <FaKey /> 2FA codes
          </button>
        </div>

        <div className={`checker-form ${activeTool === "twofa" ? "checker-form--twofa" : ""}`}>
          <div className="checker-form__label-row">
            <label htmlFor="checker-input">{activeTool === "checker" ? "Ready to check" : "Secret key (Base32)"}</label>
            {activeTool === "checker" && <span>{lines.length} {lines.length === 1 ? "line" : "lines"}</span>}
          </div>
          {activeTool === "checker" ? (
            <textarea
              id="checker-input"
              value={value}
              onChange={(event) => { setValue(event.target.value); setChecked(false); }}
              placeholder="One per line: ID, profile URL or cookie string"
              rows={7}
            />
          ) : (
            <input
              className="checker-secret-input"
              id="checker-input"
              value={value}
              onChange={(event) => { setValue(event.target.value); setChecked(false); }}
              placeholder="Paste your Base32 secret key"
              type="text"
            />
          )}
          {activeTool === "twofa" && <p className="checker-form__note">The code is computed in your browser - the key is never sent anywhere.</p>}
          <div className="checker-form__actions">
            <button className="checker-primary" onClick={handleCheck} disabled={!lines.length}>
              <FaBolt /> {activeTool === "checker" ? "Check" : "Generate codes"}
            </button>
            <button className="checker-secondary" onClick={handleClear} disabled={!value}>
              Clear
            </button>
          </div>
        </div>

        <div className={`checker-results ${checked ? "is-ready" : ""}`} aria-live="polite">
          {checked ? (
            <>
              <div className="checker-results__head"><strong>{activeTool === "checker" ? "Results" : "Generated codes"}</strong><span>{lines.length} queued</span></div>
              <div className="checker-result-list">
                {lines.map((line, index) => <div className="checker-result" key={`${line}-${index}`}><span>{activeTool === "checker" ? "Pending check" : "Code ready"}</span><code>{line}</code><button aria-label="Copy result"><FaCopy /></button></div>)}
              </div>
              <button className="checker-export"><FaDownload /> Export results</button>
            </>
          ) : <span>Results will appear here.</span>}
        </div>
      </section>

      <section className="checker-info af-panel af-content">
        <div className="checker-info__intro"><p className="page-kicker">Three steps</p><h2>How it works</h2></div>
        <div className="checker-steps">
          <div><b>01</b><h3>Paste the list</h3><p>One account per line: numeric ID, profile link or a cookie string.</p></div>
          <div><b>02</b><h3>Run the check</h3><p>The list goes in batches and statuses appear right away.</p></div>
          <div><b>03</b><h3>Take the result</h3><p>Live and dead accounts land in separate fields, ready to copy or export.</p></div>
        </div>
        <div className="checker-legend"><p className="page-kicker">Legend</p><h2>What each status means</h2><ul><li><strong>Live</strong> The account responds and is reachable.</li><li><strong>Blocked</strong> The account exists but is closed or restricted.</li><li><strong>Not found</strong> No profile was found behind the ID or link.</li><li><strong>Error</strong> No answer received. Retry the line later.</li></ul></div>
      </section>
    </div>
  );
};

export default Checker;
