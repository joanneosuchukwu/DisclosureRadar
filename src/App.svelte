<script>
  import TranscriptPane from './components/TranscriptPane.svelte';
  import EmotionTimeline from './components/EmotionTimeline.svelte';
  import MicrostatePanel from './components/MicrostatePanel.svelte';
  import About from './components/About.svelte';
  import HowToUse from './components/HowToUse.svelte';

  import { selectedTime } from './stores/selectedTime.js';
  import transcript from './data/transcript.json';

  let videoRef;
  let currentPage = 'dashboard';
  let videoSrc = '/sad-incongruent.mp4';
  let uploadedFile = null;
  let selectedTranscriptIndex = 0;
  let uploadedFileName = '';

  const options = [
    { label: 'Sad Incongruent', value: '/sad-incongruent.mp4' }
  ];

  function handleVideoChange(e) {
    uploadedFile = null;
    uploadedFileName = '';
    videoSrc = e.target.value;
  }

  function handleUpload(e) {
    const file = e.target.files[0];
    if (file) {
      uploadedFile = URL.createObjectURL(file);
      uploadedFileName = file.name;
    }
  }

  function handleTranscribe() {
    if (!uploadedFile) {
      alert('Please upload a video first');
      return;
    }
    //transcription logic
    console.log('Transcribing and analyzing:', uploadedFileName);
    alert('Transcription & analysis feature coming soon for: ' + uploadedFileName);
  }

  function handleReset() {
    uploadedFile = null;
    uploadedFileName = '';
    videoSrc = '/sad-incongruent.mp4';
    selectedTranscriptIndex = 0;
    selectedTime.set(0);
    if (videoRef) {
      videoRef.currentTime = 0;
    }
  }

  function goToPage(page) {
    currentPage = page;
  }

  function seekTo(index) {
    selectedTranscriptIndex = index;
    const ts = transcript[index].time;
    if (videoRef) {
      videoRef.currentTime = ts;
      selectedTime.set(ts);
      setTimeout(() => handleTimeUpdate(), 0);
    }
  }

  function handleTimeUpdate() {
    if (videoRef) {
      selectedTime.set(videoRef.currentTime);
    }
  }
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background: #111;
    color: #eee;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 24px;
    gap: 24px;
    background: #111;
    color: #eee;
    font-family: sans-serif;
    min-height: 100vh;
  }

  .title {
    grid-column: 1 / -1;
    padding: 16px;
    font-size: 1.5rem;
    background: #222;
    color: #90caf9;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid #444;
    border-radius: 8px;
  }

  .title-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }

  .title h1 {
    margin: 0;
    flex: 1;
    font-size: 1.5rem;
  }

  .nav-links {
    display: flex;
    gap: 8px;
  }

  .nav-btn {
    background: #333;
    color: #aaa;
    border: 1px solid #555;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .nav-btn:hover {
    background: #444;
    color: #eee;
    border-color: #777;
  }

  .nav-btn.active {
    background: #2962ff;
    color: #fff;
    border-color: #2962ff;
  }

  .left, .right {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  video {
    width: 100%;
    border: 2px solid #444;
    border-radius: 8px;
    background: black;
    aspect-ratio: 16 / 9;
    object-fit: contain;
  }

  .controls {
    grid-column: 1 / -1;
    display: flex;
    gap: 12px;
    align-items: center;
    background: #1a1a1a;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #333;
    flex-wrap: wrap;
  }

  .controls label {
    white-space: nowrap;
    color: #ccc;
  }

  .upload-section {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }

  .upload-label {
    white-space: nowrap;
  }

  .file-name {
    color: #90caf9;
    font-size: 0.85rem;
    font-weight: 500;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  select, input[type="file"] {
    background: #222;
    color: #eee;
    border: 1px solid #555;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: border-color 0.2s;
  }

  select:hover, input[type="file"]:hover {
    border-color: #777;
  }

  select:focus, input[type="file"]:focus {
    outline: none;
    border-color: #90caf9;
  }

  .transcribe-btn, .reset-btn {
    background: #2962ff;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .transcribe-btn:hover {
    background: #1e53e5;
  }

  .reset-btn {
    background: #555;
  }

  .reset-btn:hover {
    background: #666;
  }

  footer {
    grid-column: 1 / -1;
    text-align: center;
    padding: 12px;
    background-color: #181818;
    font-size: 0.8rem;
    color: #777;
    border-top: 1px solid #2a2a2a;
  }

  @media (max-width: 1200px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="title">
  <div class="title-content">
    <h1>Disclosure Radar: Multimodal Congruence Explorer</h1>
    <nav class="nav-links">
      <button 
        class="nav-btn {currentPage === 'dashboard' ? 'active' : ''}" 
        on:click={() => goToPage('dashboard')}
        type="button"
      >
        Dashboard
      </button>
      <button 
        class="nav-btn {currentPage === 'how-to-use' ? 'active' : ''}" 
        on:click={() => goToPage('how-to-use')}
        type="button"
      >
        How to Use
      </button>
      <button 
        class="nav-btn {currentPage === 'about' ? 'active' : ''}" 
        on:click={() => goToPage('about')}
        type="button"
      >
        About
      </button>
    </nav>
  </div>
</div>

{#if currentPage === 'about'}
  <About />
{:else if currentPage === 'how-to-use'}
  <HowToUse />
{:else}
  <!-- Dashboard content -->

<div class="controls">
  <label for="video-select">Choose video:</label>
  <select id="video-select" on:change={handleVideoChange}>
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>

  <div class="upload-section">
    <label for="file-upload" class="upload-label">Upload custom video:</label>
    <input id="file-upload" type="file" accept="video/*" on:change={handleUpload} />
    {#if uploadedFileName}
      <span class="file-name">{uploadedFileName}</span>
      <button class="transcribe-btn" on:click={handleTranscribe} type="button">Transcribe & Analyze</button>
      <button class="reset-btn" on:click={handleReset} type="button">Reset to Default</button>
    {/if}
  </div>
</div>

<div class="container">
  <div class="left">
    <video
      bind:this={videoRef}
      on:timeupdate={handleTimeUpdate}
      autoplay
      controls
      muted
    >
      <source src={uploadedFile || videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <TranscriptPane {seekTo} {selectedTranscriptIndex} />
  </div>

  <div class="right">
    <EmotionTimeline {selectedTranscriptIndex} />
    <MicrostatePanel {selectedTranscriptIndex} />
  </div>
</div>

<footer>© 2025 Joanne Osuchukwu | Disclosure Radar Research Project</footer>
{/if}