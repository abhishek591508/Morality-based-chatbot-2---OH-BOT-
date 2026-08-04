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
  ragLoading,
  ragFeedback,
  onContinue
}) => {
  const increased = scoreDeltas.filter((d) => d.delta > 0);
  const decreased = scoreDeltas.filter((d) => d.delta < 0);

  const choiceLine =
    ragFeedback?.choiceLine ||
    'This choice updates your moral scores based on the values it emphasizes.';
  const endingForecast =
    ragFeedback?.endingForecast ||
    (endingLean
      ? `Based on your current scores, you appear ${endingLean.toLowerCase()}. Later choices can still change this.`
      : 'Your later choices will continue to shape how this story may end.');

  return (
    <div className="projection-container">
      <div className="projection-card">
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

        <section className="projection-section ai-section">
          <h3 className="section-heading">AI insight (grounded)</h3>
          <p className="ai-disclaimer">
            AI foreshadowing — not your final result. Generative text does not change scores or the story path.
          </p>

          {ragLoading ? (
            <div className="rag-loading">
              <div className="rag-skeleton" />
              <div className="rag-skeleton short" />
              <p className="rag-loading-text">Retrieving moral context…</p>
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
              {ragFeedback?.sources?.length > 0 && (
                <p className="ai-sources">
                  Sources:{' '}
                  {ragFeedback.sources.map((s) => s.source).join(' · ')}
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
