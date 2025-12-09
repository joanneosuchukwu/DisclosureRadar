<script>
  import transcript from '../data/transcript.json';

  export let seekTo;
  export let selectedTranscriptIndex = 0;

  function handleClick(index) {
    seekTo(index);
  }
</script>

<style>
  .transcript {
    background: #1a1a1a;
    padding: 12px;
    border-radius: 8px;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #333;
  }

  .line {
    padding: 10px 12px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 6px;
    color: #ccc;
    font-size: 0.9rem;
    line-height: 1.4;
    transition: all 0.15s ease;
    border-left: 3px solid transparent;
  }

  .line:hover {
    background: #2a2a2a;
    color: #eee;
    border-left-color: #90caf9;
  }

  .line.active {
    background: #2962ff;
    color: #fff;
    font-weight: 500;
    border-left-color: #fff;
  }

  .time-badge {
    font-size: 0.8rem;
    color: #999;
    margin-right: 8px;
    display: inline-block;
    min-width: 40px;
  }
</style>

<div class="transcript">
  {#each transcript as line, i}
    <div
      class="line {i === selectedTranscriptIndex ? 'active' : ''}"
      on:click={() => handleClick(i)}
      role="button"
      tabindex="0"
    >
      <span class="time-badge">{line.time.toFixed(1)}s</span>
      {line.text}
    </div>
  {/each}
</div>