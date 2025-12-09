<script>
  import signals from '../data/signals.json';
  import microstates from '../data/microstates.json';
  import transcript from '../data/transcript.json';

  export let selectedTranscriptIndex = 0;

  function getSignalAtTime(time) {
    let closest = signals[0];
    let minDiff = Infinity;

    for (const s of signals) {
      const diff = Math.abs(s.timestamp - time);
      if (diff < minDiff) {
        minDiff = diff;
        closest = s;
      }
    }

    return closest;
  }

  function getMicrostateAtTime(time) {
    for (let i = 0; i < microstates.length; i++) {
      const current = microstates[i];
      const next = microstates[i + 1];
      if (time >= current.timestamp && (!next || time < next.timestamp)) {
        return current;
      }
    }
    return microstates[0];
  }

  function computeCoherence(signal) {
    const s = Math.abs(signal.sentiment || 0);
    const e = Math.abs(signal.energy || 0);
    const f = Math.abs(signal.score || 0);
    const max = Math.max(s, e, f);
    const min = Math.min(s, e, f);
    return 1 - (max - min);
  }

  function labelCoherence(score) {
    if (score >= 0.8) return 'High';
    if (score >= 0.5) return 'Low';
    return 'Incongruent';
  }

  let currentTime;
  let activeSignal;
  let currentMicrostate;
  let coherence;
  let coherenceLabel;

  $: {
    currentTime = transcript[selectedTranscriptIndex]?.time || 0;
    activeSignal = getSignalAtTime(currentTime);
    currentMicrostate = getMicrostateAtTime(currentTime);
    coherence = activeSignal ? computeCoherence(activeSignal) : 0;
    coherenceLabel = labelCoherence(coherence);
  }
</script>

<style>
  .panel {
    background: #1e1e1e;
    padding: 16px;
    border-radius: 8px;
    font-size: 0.9rem;
    color: #ccc;
    border: 1px solid #333;
    max-height: 220px;
    overflow-y: auto;
  }

  .panel h3 {
    margin: 0 0 16px 0;
    font-size: 1rem;
    color: #90caf9;
    font-weight: 600;
  }

  .section {
    margin-bottom: 16px;
  }

  .section:last-child {
    margin-bottom: 0;
  }

  .label {
    margin-bottom: 8px;
    font-size: 0.85rem;
    color: #999;
    font-weight: 500;
  }

  .bar {
    display: flex;
    height: 24px;
    margin-bottom: 12px;
    border-radius: 4px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
  }

  .bar div {
    height: 100%;
    transition: width 0.3s ease;
  }

  .words {
    background: #64b5f6;
  }

  .voice {
    background: #81c784;
  }

  .face {
    background: #f48fb1;
  }

  .coherence-bar {
    background: linear-gradient(to right, #ef5350, #ffee58, #66bb6a);
    height: 24px;
    border-radius: 4px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #333;
    font-size: 0.9rem;
  }

  .info-row:last-child {
    border-bottom: none;
  }

  .info-label {
    color: #999;
  }

  .info-value {
    color: #eee;
    font-weight: 500;
  }

  .coherence-text {
    font-weight: bold;
    margin-top: 8px;
    font-size: 0.95rem;
  }

  .coherence-text.high {
    color: #66bb6a;
  }

  .coherence-text.low {
    color: #ffee58;
  }

  .coherence-text.incongruent {
    color: #ef5350;
  }

  .microstate-info {
    background: rgba(0, 0, 0, 0.3);
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 0.9rem;
    text-transform: capitalize;
  }
</style>

<div class="panel">
  <h3>Signal Analysis</h3>

  {#if activeSignal}
    <div class="section">
      <div class="info-row">
        <span class="info-label">Time:</span>
        <span class="info-value">{activeSignal.timestamp.toFixed(2)}s</span>
      </div>
      <div class="info-row">
        <span class="info-label">Emotion:</span>
        <span class="info-value">{activeSignal.emotion || 'unknown'}</span>
      </div>
    </div>

    <div class="section">
      <div class="label">Words (Sentiment)</div>
      <div class="bar">
        <div
          class="words"
          style="width: {Math.max(0, Math.min(100, Math.abs(activeSignal.sentiment) * 100))}%"
        ></div>
      </div>

      <div class="label">Voice (Energy)</div>
      <div class="bar">
        <div
          class="voice"
          style="width: {Math.max(0, Math.min(100, Math.abs(activeSignal.energy) * 100))}%"
        ></div>
      </div>

      <div class="label">Face (Score)</div>
      <div class="bar">
        <div
          class="face"
          style="width: {Math.max(0, Math.min(100, Math.abs(activeSignal.score) * 100))}%"
        ></div>
      </div>
    </div>

    <div class="section">
      <div class="label">Coherence</div>
      <div class="bar">
        <div
          class="coherence-bar"
          style="width: {Math.max(0, Math.min(100, coherence * 100))}%"
        ></div>
      </div>
      <div class="coherence-text {coherenceLabel.toLowerCase()}">
        {coherenceLabel}: {coherence.toFixed(2)}
      </div>
    </div>

    <div class="section">
      <div class="label">Microstate</div>
      <div class="microstate-info">
        {currentMicrostate?.state || 'unknown'}
      </div>
    </div>
  {:else}
    <div>Loading signal data...</div>
  {/if}
</div>