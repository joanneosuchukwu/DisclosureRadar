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

  .about-container {
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
    max-height: 1500px;
  }

  .content-text {
    color: #ccc;
    font-size: 1rem;
  }

  .highlight {
    color: #64b5f6;
    font-weight: 500;
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

  .data-section {
    background: rgba(0, 0, 0, 0.3);
    padding: 16px;
    border-radius: 6px;
    margin: 16px 0;
    border-left: 3px solid #90caf9;
  }

  .data-section strong {
    color: #90caf9;
    display: block;
    margin-bottom: 8px;
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

  @media (max-width: 768px) {
    .about-container {
      padding: 24px;
    }

    .header h1 {
      font-size: 1.8rem;
    }
  }
</style>

<div class="about-container">
  <div class="header">
    <h1>Disclosure Radar</h1>
    <p>A research tool for analyzing multimodal emotional expression</p>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('what')} role="button" tabindex="0">
      <span>What Is This?</span>
      <span class="toggle-icon {expandedSection === 'what' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'what' ? 'expanded' : ''}">
      <div class="content-text">
        <p>Disclosure Radar is a <span class="highlight">research prototype</span> that analyzes video recordings to detect inconsistencies between what people say and how they say it. It examines three dimensions of communication simultaneously: the words (sentiment), the voice (energy), and facial expressions.</p>

        <p>When these three align, communication is <span class="highlight">coherent</span>. When they diverge, it is <span class="highlight">incoherent</span>. This incoherence may indicate emotional avoidance, distress, or internal conflict, but it does not provide diagnosis or certainty.</p>

        <div class="warning-box">
          <strong>Important:</strong> This is a research tool designed to explore patterns in multimodal communication. The current data is fictitious and provided for demonstration purposes only.
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('how')} role="button" tabindex="0">
      <span>How Does It Work?</span>
      <span class="toggle-icon {expandedSection === 'how' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'how' ? 'expanded' : ''}">
      <div class="content-text">
        <p>The tool extracts and analyzes three separate data streams from video: linguistic sentiment, vocal characteristics, and facial expression. These signals are processed, normalized to comparable scales, and then compared across time.</p>

        <div class="data-section">
          <strong>Sentiment (Words)</strong>
          The emotional tone and polarity of speech is analyzed using proprietary processing methods.
        </div>

        <div class="data-section">
          <strong>Energy (Voice)</strong>
          Vocal intensity and dynamics are measured from the audio signal using signal processing techniques.
        </div>

        <div class="data-section">
          <strong>Facial Expression (Face)</strong>
          Emotional and behavioral markers are detected from facial regions using computer vision methods.
        </div>

        <p>When all three signals indicate alignment in their emotional direction, coherence is high. When they diverge, coherence is low. The specific methods for extraction, processing, and comparison are proprietary.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('data')} role="button" tabindex="0">
      <span>About the Data</span>
      <span class="toggle-icon {expandedSection === 'data' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'data' ? 'expanded' : ''}">
      <div class="content-text">
        <p><strong>Fictional Data:</strong> The current dataset is synthetically generated for research and demonstration purposes only.</p>

        <p><strong>Video Source:</strong> The demo video is open source and used under appropriate licensing for educational purposes.</p>

        <p><strong>Processing:</strong> Data from all three modalities undergoes standardized processing and alignment techniques. The exact methods and parameters are proprietary.</p>

        <p><strong>Limitations:</strong> Any real-world application depends heavily on data quality, recording conditions, and environmental factors. Signal accuracy varies by context and cannot be guaranteed.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('use')} role="button" tabindex="0">
      <span>Potential Research Applications</span>
      <span class="toggle-icon {expandedSection === 'use' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'use' ? 'expanded' : ''}">
      <div class="content-text">
        <p>This type of analysis has been explored in various domains:</p>

        <p><strong>Clinical contexts:</strong> Detecting emotional avoidance or distress patterns in therapy sessions. Identifying moments of disclosure difficulty or emotional shutdown. Tracking changes in coherence over treatment.</p>

        <p><strong>Risk assessment:</strong> Supporting evaluation of risk indicators in contexts like crisis interviews or psychological assessment, where incoherence may signal distress or disengagement.</p>

        <p><strong>Deception detection:</strong> Some research suggests incoherence can relate to deceptive communication, though this is contested and unreliable.</p>

        <p><strong>Communication training:</strong> Helping speakers identify moments where their message lacks coherence and may undermine credibility.</p>

        <p><strong>Interview and investigative contexts:</strong> Supporting interviewers in identifying emotional responses or disclosure patterns during investigative interviews.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('limitations')} role="button" tabindex="0">
      <span>Critical Limitations and Disclaimers</span>
      <span class="toggle-icon {expandedSection === 'limitations' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'limitations' ? 'expanded' : ''}">
      <div class="content-text">
        <div class="warning-box">
          <strong>This tool does not provide diagnosis, assessment, or proof of emotional state, deception, or intent.</strong>
        </div>

        <p><strong>Masking is real:</strong> People who are skilled at emotional regulation, trained to deceive, or experiencing numbness can maintain coherence while experiencing significant distress. Conversely, some people are naturally incoherent speakers without indicating distress.</p>

        <p><strong>Context matters enormously:</strong> The same incoherent pattern can signal distress, sarcasm, thought processing, accent, speech impediment, poor recording quality, or dozens of other explanations unrelated to emotional state.</p>

        <p><strong>Individual differences:</strong> Some people are naturally more or less expressive. Some neurodivergent individuals process and express emotion differently. Cultural norms vary in emotional expression.</p>

        <p><strong>Technical limitations:</strong> Models are trained on limited datasets and may perform differently across demographics, languages, accents, or conditions outside the training data. Video quality, lighting, camera angle, and audio clarity all affect accuracy.</p>

        <p><strong>Multimodal incoherence is not pathology:</strong> Incoherence alone does not indicate mental illness, lying, danger, or any clinical condition. It is simply a pattern in how three communication channels align.</p>

        <p><strong>Not a substitute for professional judgment:</strong> This tool is meant to support human observation and professional judgment, not replace it. In any consequential decision (clinical, legal, forensic), human expertise and complete context are essential.</p>

        <p><strong>Ethical use:</strong> This tool should only be used with informed consent in research contexts and with appropriate ethical oversight. Use in law enforcement, deception detection, or other consequential settings carries significant risk of misuse and harm.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h2 on:click={() => toggleSection('terms')} role="button" tabindex="0">
      <span>Key Terms</span>
      <span class="toggle-icon {expandedSection === 'terms' ? 'expanded' : ''}">-</span>
    </h2>
    <div class="section-content {expandedSection === 'terms' ? 'expanded' : ''}">
      <div class="content-text">
        <p><strong>Coherence/Congruence:</strong> The degree to which words, voice, and facial expression align in their emotional direction. High coherence means all three signal the same emotional state. Low coherence means they diverge.</p>

        <p><strong>Incoherence/Incongruence:</strong> Misalignment between what is said, how it is said, and what the face shows. Example: saying "I'm happy" in a sad tone while looking away.</p>

        <p><strong>Sentiment:</strong> The emotional tone of spoken words, typically measured on a scale from negative to positive. Sentiment analysis attempts to extract this computationally.</p>

        <p><strong>Energy:</strong> The amplitude and intensity of the audio signal. Higher energy indicates louder, more intense speech; lower energy indicates quieter, more subdued speech.</p>

        <p><strong>Normalization:</strong> Rescaling data to comparable ranges so that changes in one signal can be visually compared to changes in another.</p>

        <p><strong>Microstate:</strong> A recognizable behavioral or emotional pattern. Examples: avoidance, masking, flat affect, disclosure attempt, shutdown.</p>

        <p><strong>Multimodal:</strong> Analyzing multiple modes of communication (words, voice, face, body) simultaneously rather than just one.</p>
      </div>
    </div>
  </div>

  <div class="cta-section">
    <h2 style="margin: 0 0 16px 0; color: #90caf9;">Ready to Explore?</h2>
    <p style="margin: 0 0 20px 0; color: #aaa;">Open the dashboard to analyze the demo video</p>
    <a href="/" class="cta-button">Go to Dashboard</a>
  </div>

  <div class="footer">
    <p>© 2025 Joanne Osuchukwu | Disclosure Radar Research Project | For research and educational use only</p>
  </div>
</div>