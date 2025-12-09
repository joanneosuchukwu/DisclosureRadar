<script>
  let expandedSection = null;

  function toggleSection(section) {
    expandedSection = expandedSection === section ? null : section;
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

  .guide-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 24px;
    background: #111;
    color: #eee;
    line-height: 1.8;
  }

  .header {
    text-align: center;
    margin-bottom: 40px;
    border-bottom: 2px solid #333;
    padding-bottom: 30px;
  }

  .header h1 {
    font-size: 2.5rem;
    color: #90caf9;
    margin: 0 0 12px 0;
    font-weight: bold;
  }

  .header p {
    font-size: 1.1rem;
    color: #aaa;
    margin: 0;
  }

  .section {
    margin-bottom: 30px;
    background: #1a1a1a;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #333;
  }

  .section h2 {
    color: #90caf9;
    font-size: 1.4rem;
    margin: 0 0 12px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
  }

  .section h2:hover {
    color: #64b5f6;
  }

  .toggle-icon {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  .toggle-icon.expanded {
    transform: rotate(180deg);
  }

  .section-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .section-content.expanded {
    max-height: 2000px;
  }

  .content-text {
    color: #ccc;
    font-size: 1rem;
  }

  .step-number {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: #2962ff;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 32px;
    font-weight: bold;
    margin-right: 12px;
    font-size: 0.9rem;
  }

  .step {
    margin: 20px 0;
    padding: 16px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    border-left: 3px solid #90caf9;
  }

  .step h3 {
    margin: 0 0 8px 0;
    color: #90caf9;
    font-size: 1.1rem;
  }

  .step p {
    margin: 8px 0;
    color: #ccc;
  }

  .highlight {
    color: #64b5f6;
    font-weight: 500;
  }

  .component-box {
    background: rgba(41, 98, 255, 0.1);
    border: 1px solid #2962ff;
    padding: 16px;
    border-radius: 6px;
    margin: 16px 0;
  }

  .component-box h4 {
    margin: 0 0 8px 0;
    color: #90caf9;
  }

  .component-box p {
    margin: 8px 0;
    color: #ccc;
    font-size: 0.95rem;
  }

  .tip-box {
    background: rgba(129, 199, 132, 0.1);
    border-left: 4px solid #81c784;
    padding: 16px;
    border-radius: 4px;
    margin: 16px 0;
    color: #ddd;
  }

  .tip-box strong {
    color: #81c784;
  }

  .warning-box {
    background: rgba(255, 238, 88, 0.1);
    border-left: 4px solid #ffee58;
    padding: 16px;
    border-radius: 4px;
    margin: 16px 0;
    color: #ddd;
  }

  .warning-box strong {
    color: #ffee58;
  }

  .cta-section {
    text-align: center;
    margin-top: 40px;
    padding: 30px;
    background: linear-gradient(135deg, rgba(41, 98, 255, 0.1), rgba(144, 202, 249, 0.1));
    border-radius: 8px;
    border: 1px solid #333;
  }

  .cta-button {
    display: inline-block;
    background: #2962ff;
    color: #fff;
    padding: 12px 24px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 1rem;
  }

  .cta-button:hover {
    background: #1e53e5;
  }

  .footer {
    text-align: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #333;
    color: #666;
    font-size: 0.85rem;
  }

  ol {
    color: #ccc;
  }

  ol li {
    margin: 8px 0;
  }

  @media (max-width: 768px) {
    .guide-container {
      padding: 24px;
    }

    .header h1 {
      font-size: 1.8rem;
    }
  }
</style>

<div class="guide-container">
  <div class="header">
    <h1>How to Use Disclosure Radar</h1>
    <p>Step-by-step guide to analyzing multimodal communication</p>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('basics')} role="button" tabindex="0">
      <span>The Basics</span>
      <span class="toggle-icon {expandedSection === 'basics' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'basics' ? 'expanded' : ''}">
      <div class="content-text">
        <p>Disclosure Radar has two main screens:</p>

        <div class="component-box">
          <h4>Dashboard</h4>
          <p>The main analysis view where you watch video and see real-time multimodal analysis of sentiment, energy, and facial expression.</p>
        </div>

        <div class="component-box">
          <h4>About</h4>
          <p>Background information about the tool, how it works, its limitations, and appropriate use cases.</p>
        </div>

        <p>You can switch between these using the navigation buttons at the top of the page.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('watching')} role="button" tabindex="0">
      <span>Watching and Navigating Video</span>
      <span class="toggle-icon {expandedSection === 'watching' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'watching' ? 'expanded' : ''}">
      <div class="content-text">
        <div class="step">
          <h3><span class="step-number">1</span>Choose Your Video</h3>
          <p>Use the dropdown menu at the top to select the demo video (Sad Incongruent). This is the pre-loaded example with analysis already computed.</p>
        </div>

        <div class="step">
          <h3><span class="step-number">2</span>Play or Seek</h3>
          <p>Use the video player controls to play, pause, and seek through the video. You can also click the progress bar to jump to any moment.</p>
        </div>

        <div class="step">
          <h3><span class="step-number">3</span>Use the Transcript</h3>
          <p>Click any line in the transcript pane to jump directly to that moment in the video. The selected line will highlight in blue. This is the fastest way to navigate to moments of interest.</p>
        </div>

        <div class="tip-box">
          <strong>Tip:</strong> The transcript is clickable. Use it to explore specific spoken moments and see how they relate to the multimodal analysis.
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('reading')} role="button" tabindex="0">
      <span>Reading the Emotion Timeline</span>
      <span class="toggle-icon {expandedSection === 'reading' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'reading' ? 'expanded' : ''}">
      <div class="content-text">
        <p>The Multimodal Emotion Timeline shows three colored lines representing the three data streams:</p>

        <div class="step">
          <h3>Understanding the Lines</h3>
          <p><span class="highlight">Blue line (Words):</span> Shows the emotional sentiment of the spoken text. Higher values are more positive, lower values are more negative.</p>
          <p><span class="highlight">Green line (Voice):</span> Shows vocal energy and intensity. Higher peaks indicate more emphatic or intense speech; lower values indicate quieter, more subdued expression.</p>
          <p><span class="highlight">Pink line (Face):</span> Shows facial expression intensity. Higher values indicate more pronounced emotional expression in the face.</p>
        </div>

        <div class="step">
          <h3>What to Look For</h3>
          <p>When all three lines move together in the same direction, the communication is <span class="highlight">coherent</span>. When they diverge or move in opposite directions, the communication is <span class="highlight">incoherent</span>.</p>
        </div>

        <div class="step">
          <h3>The Highlighted Section</h3>
          <p>A light blue box shows the time range of the currently selected transcript line. This helps you see which part of the timeline corresponds to what was said.</p>
        </div>

        <div class="tip-box">
          <strong>Tip:</strong> Look for moments where the lines spread apart or cross. These often indicate interesting patterns worth noting.
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('analysis')} role="button" tabindex="0">
      <span>Using the Signal Analysis Panel</span>
      <span class="toggle-icon {expandedSection === 'analysis' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'analysis' ? 'expanded' : ''}">
      <div class="content-text">
        <p>The Signal Analysis panel shows detailed metrics for the moment you are currently watching:</p>

        <div class="step">
          <h3><span class="step-number">1</span>Time and Emotion</h3>
          <p>Shows the exact timestamp and the dominant emotional expression detected in the face at that moment.</p>
        </div>

        <div class="step">
          <h3><span class="step-number">2</span>Three Bars: Words, Voice, Face</h3>
          <p>These visual bars show the current strength of each signal at the selected time. Wider bars indicate stronger signals.</p>
          <p>Use these to quickly see at a glance which modality is currently strongest. For example, if Words is high but Voice and Face are low, the person is saying positive things but not expressing them with their voice or face.</p>
        </div>

        <div class="step">
          <h3><span class="step-number">3</span>Coherence Score</h3>
          <p>This is the key metric. It shows how well all three signals align:</p>
          <p><span class="highlight">High:</span> All three signals are aligned and strong. Communication is coherent.</p>
          <p><span class="highlight">Low:</span> The signals are somewhat misaligned but not drastically. Moderate incoherence.</p>
          <p><span class="highlight">Incongruent:</span> The signals diverge significantly. Communication is highly incoherent.</p>
        </div>

        <div class="step">
          <h3><span class="step-number">4</span>Microstate</h3>
          <p>This describes the behavioral pattern being detected at that moment. Examples include avoidance, masking, flat affect, disclosure attempts, or shutdown. It's a label for the overall emotional/behavioral state.</p>
        </div>

        <div class="tip-box">
          <strong>Tip:</strong> Watch the coherence score change as you move through the transcript. High coherence moments feel natural and aligned. Low/incongruent moments feel off or conflicted.
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('workflow')} role="button" tabindex="0">
      <span>Example Workflow</span>
      <span class="toggle-icon {expandedSection === 'workflow' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'workflow' ? 'expanded' : ''}">
      <div class="content-text">
        <ol>
          <li>Open the Dashboard and choose the Sad Incongruent video from the dropdown</li>
          <li>Play the video or start clicking transcript lines to navigate</li>
          <li>As you watch, observe the Emotion Timeline. Notice where the three colored lines align and where they diverge</li>
          <li>When you see an interesting moment (lines spreading apart, dramatic changes), click that line in the transcript to select it</li>
          <li>Look at the Signal Analysis panel to see the specific metrics for that moment</li>
          <li>Note the coherence score and microstate label</li>
          <li>Continue exploring different moments to build understanding of how multimodal coherence changes throughout the video</li>
        </ol>

        <div class="tip-box">
          <strong>Research tip:</strong> Take notes on moments of high incoherence. What is being said? What is the tone of voice? What does the face show? Is there an explanation for the mismatch?
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('upload')} role="button" tabindex="0">
      <span>Uploading Your Own Video</span>
      <span class="toggle-icon {expandedSection === 'upload' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'upload' ? 'expanded' : ''}">
      <div class="content-text">
        <div class="step">
          <h3><span class="step-number">1</span>Upload File</h3>
          <p>Click the file upload button in the controls section at the top. Select a video file from your computer. Supported formats are standard video formats (MP4, etc).</p>
        </div>

        <div class="step">
          <h3><span class="step-number">2</span>Video Plays</h3>
          <p>Once uploaded, your video will appear in the video player and begin playing. The filename will display so you know which video is loaded.</p>
        </div>

        <div class="step">
          <h3><span class="step-number">3</span>Transcribe and Analyze</h3>
          <p>Click the "Transcribe and Analyze" button to process your video. This will extract the transcript and compute the multimodal analysis.</p>
          <p><span class="highlight">Note:</span> This feature is coming soon. Currently, you can upload and watch video, but analysis of custom videos is not yet available.</p>
        </div>

        <div class="step">
          <h3><span class="step-number">4</span>Reset to Default</h3>
          <p>Click the "Reset to Default" button to clear your upload and return to the demo video at any time.</p>
        </div>

        <div class="warning-box">
          <strong>Important:</strong> Uploaded videos are processed locally in your browser. Do not upload videos with sensitive or private information unless you understand the privacy implications.
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('interpret')} role="button" tabindex="0">
      <span>How to Interpret Results</span>
      <span class="toggle-icon {expandedSection === 'interpret' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'interpret' ? 'expanded' : ''}">
      <div class="content-text">
        <div class="step">
          <h3>High Coherence Moments</h3>
          <p>When coherence is high, all three signals align. This often indicates genuine, unguarded expression. However, it can also indicate skilled emotional regulation or practiced delivery.</p>
        </div>

        <div class="step">
          <h3>Low Coherence Moments</h3>
          <p>When coherence is low, the three signals diverge. This might indicate emotional avoidance, conflict, careful word choice, sarcasm, or simply natural variation in how people express themselves.</p>
        </div>

        <div class="step">
          <h3>What It Does NOT Tell You</h3>
          <p>Incoherence does not mean someone is lying. It does not indicate mental illness, danger, or bad intentions. It is simply a pattern in how communication channels align. Many benign explanations exist for incoherence.</p>
        </div>

        <div class="warning-box">
          <strong>Critical reminder:</strong> This tool is exploratory. It shows patterns, not truths. Always consider context, individual differences, technical limitations, and the possibility of masking or skilled emotional control before drawing any conclusions.
        </div>

        <div class="tip-box">
          <strong>Best practice:</strong> Use this tool to identify moments worth closer examination, not to reach conclusions. Always verify impressions against other evidence and professional judgment.
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('limitations')} role="button" tabindex="0">
      <span>Common Questions</span>
      <span class="toggle-icon {expandedSection === 'limitations' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'limitations' ? 'expanded' : ''}">
      <div class="content-text">
        <p><strong>Why does my uploaded video not show analysis?</strong></p>
        <p>The analysis feature for custom videos is currently in development. For now, you can upload and watch your own video, but the sentiment, energy, and facial expression analysis is only available for the demo video.</p>

        <p><strong>Can I use this to detect lies?</strong></p>
        <p>No. While some research explores connections between incoherence and deception, this tool does not reliably detect deception. People can be incoherent for many innocent reasons, and skilled communicators can be coherent while being deceptive.</p>

        <p><strong>Does low coherence mean someone is in crisis?</strong></p>
        <p>No. Low coherence can indicate distress, but it can also indicate sarcasm, thought processing, accent, speech patterns, or technical issues with the recording. This tool should not be used to assess risk or make clinical decisions.</p>

        <p><strong>Why do the three lines sometimes move together and sometimes apart?</strong></p>
        <p>This reflects real variation in how consistently someone's words, voice, and face align. In natural conversation, people are not perfectly coherent at every moment. Moments of divergence are worth noting, but they are not unusual or necessarily problematic.</p>

        <p><strong>Can I download or export the analysis?</strong></p>
        <p>Currently, the analysis is displayed in the dashboard. Export functionality is not yet available.</p>
      </div>
    </div>
  </div>

  <div class="cta-section">
    <h2 style="margin: 0 0 16px 0; color: #90caf9;">Ready to Start?</h2>
    <p style="margin: 0 0 20px 0; color: #aaa;">Go to the Dashboard and start exploring</p>
    <a href="/" class="cta-button">Open Dashboard</a>
  </div>

  <div class="footer">
    <p>© 2025 Joanne Osuchukwu | Disclosure Radar Research Project</p>
  </div>
</div>