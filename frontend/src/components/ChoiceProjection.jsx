import React from 'react';
import { getScoreColor } from '../utils/moralCalculations';
import './ChoiceProjection.css';

const formatScoreName = (key) =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

const ChoiceProjection = ({
  choiceText,
  scoreDeltas,
  moralScores,
  endingLean,
  ragEnabled = false,
  ragLoading,
  ragFeedback,
  onRagToggle,
  onContinue,
  embedded = false
}) => {
  const increased = scoreDeltas.filter((d) => d.delta > 0);
  const decreased = scoreDeltas.filter((d) => d.delta < 0);

  const isRagLive = ragEnabled && ragFeedback && !ragFeedback.usedFallback && !ragLoading;
  const isFallback = !ragEnabled || ragFeedback?.usedFallback || !ragFeedback;

  const choiceLine =
    ragFeedback?.choiceLine ||
    'This choice updates your moral scores based on the values it emphasizes.';
  const endingForecast =
    ragFeedback?.endingForecast ||
    (endingLean
      ? `Based on your current scores, you appear ${endingLean.toLowerCase()}. Later choices can still change this.`
      : 'Your later choices will continue to shape how this story may end.');

  const sourceLabel = !ragEnabled
    ? 'Local preview'
    : ragLoading
      ? 'Fetching RAG…'
      : isRagLive
        ? 'RAG + Llama'
        : 'Fallback (not RAG)';

  return (
    <div className={embedded ? 'projection-panel' : 'projection-container'}>
      <div className={`projection-card ${embedded ? 'projection-card-embedded' : ''}`}>
        <h2 className="projection-title">Choice Projection</h2>
        <p className="projection-choice">
          <span className="projection-label">Your choice:</span> {choiceText}
        </p>

        <section className="projection-section">
          <h3 className="section-heading">Score changes</h3>
          <div className="delta-columns">
            <div className="delta-column">
              <h4 className="delta-subtitle up">Increased</h4>
              {increased.length === 0 ? (
                <p className="delta-empty">None this turn</p>
              ) : (
                <ul className="delta-list">
                  {increased.map(({ trait, delta }) => (
                    <li key={trait}>
                      <span>{formatScoreName(trait)}</span>
                      <span className="delta-value up">+{delta}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="delta-column">
              <h4 className="delta-subtitle down">Decreased</h4>
              {decreased.length === 0 ? (
                <p className="delta-empty">None this turn</p>
              ) : (
                <ul className="delta-list">
                  {decreased.map(({ trait, delta }) => (
                    <li key={trait}>
                      <span>{formatScoreName(trait)}</span>
                      <span className="delta-value down">{delta}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        <section className="projection-section">
          <h3 className="section-heading">Updated moral scores</h3>
          <div className="projection-scores-grid">
            {Object.entries(moralScores).map(([key, value]) => (
              <div key={key} className="projection-score-item">
                <div className="projection-score-header">
                  <span>{formatScoreName(key)}</span>
                  <span style={{ color: getScoreColor(value) }}>{value}</span>
                </div>
                <div className="projection-bar-track">
                  <div
                    className="projection-bar-fill"
                    style={{
                      width: `${value}%`,
                      backgroundColor: getScoreColor(value)
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projection-section lean-section">
          <h3 className="section-heading">Ending lean</h3>
          <p className="lean-badge">{endingLean}</p>
          <p className="lean-note">Rule-based from your current scores — not a final result.</p>
        </section>

        <section
          className={`projection-section ai-section ${
            isRagLive ? 'ai-section-rag' : 'ai-section-fallback'
          }`}
        >
          <div className="ai-section-header">
            <h3 className="section-heading">AI insight</h3>
            <label className="rag-toggle" title="Turn RAG explanations on or off">
              <span className="rag-toggle-label">RAG</span>
              <input
                type="checkbox"
                checked={ragEnabled}
                onChange={(e) => onRagToggle?.(e.target.checked)}
              />
              <span className="rag-toggle-slider" />
            </label>
          </div>

          <div
            className={`source-badge ${
              isRagLive ? 'source-badge-rag' : 'source-badge-fallback'
            }`}
          >
            {sourceLabel}
          </div>

          <p className="ai-disclaimer">
            {ragEnabled
              ? 'AI foreshadowing — not your final result. Does not change scores or story path.'
              : 'RAG is off. Showing local choice preview only. Turn RAG on for grounded Llama insight.'}
          </p>

          {ragEnabled && ragLoading ? (
            <div className="rag-loading">
              <div className="rag-skeleton" />
              <div className="rag-skeleton short" />
              <p className="rag-loading-text">Retrieving moral context via RAG…</p>
            </div>
          ) : (
            <>
              <div className="ai-block">
                <h4>About this choice</h4>
                <p>{choiceLine}</p>
              </div>
              <div className="ai-block">
                <h4>Possible trajectory</h4>
                <p>{endingForecast}</p>
              </div>
              {isRagLive && ragFeedback?.sources?.length > 0 && (
                <p className="ai-sources">
                  Retrieved sources:{' '}
                  {ragFeedback.sources.map((s) => s.source).join(' · ')}
                </p>
              )}
              {isFallback && ragEnabled && !ragLoading && (
                <p className="ai-sources">
                  Placeholder text used because RAG/Groq was unavailable.
                </p>
              )}
            </>
          )}
        </section>

        <button
          type="button"
          className="projection-continue-btn"
          onClick={onContinue}
        >
          {ragLoading ? 'Continue anyway' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

export default ChoiceProjection;
