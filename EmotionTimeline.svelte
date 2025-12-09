<script>
  import { onMount, onDestroy } from 'svelte';
  import Chart from 'chart.js/auto';
  import signals from '../data/signals.json';
  import transcript from '../data/transcript.json';

  export let selectedTranscriptIndex = 0;

  let canvas;
  let chart;
  let chartContainer;

  function getTimeRange(index) {
    const current = transcript[index];
    const next = transcript[index + 1];
    
    return {
      start: current.time,
      end: next ? next.time : transcript[transcript.length - 1].time
    };
  }

  onMount(() => {
    const ctx = canvas.getContext('2d');

    const highlightPlugin = {
      id: 'highlightSegment',
      afterDatasetsDraw(chart) {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        const xScale = chart.scales.x;
        
        if (!chartArea || !xScale) return;
        
        const range = getTimeRange(selectedTranscriptIndex);
        const pixelStart = xScale.getPixelForValue(range.start);
        const pixelEnd = xScale.getPixelForValue(range.end);
        
        ctx.fillStyle = 'rgba(144, 202, 249, 0.15)';
        ctx.fillRect(
          pixelStart,
          chartArea.top,
          pixelEnd - pixelStart,
          chartArea.bottom - chartArea.top
        );
        
        ctx.strokeStyle = '#90caf9';
        ctx.lineWidth = 2;
        ctx.strokeRect(
          pixelStart,
          chartArea.top,
          pixelEnd - pixelStart,
          chartArea.bottom - chartArea.top
        );
      }
    };

    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: signals.map(d => d.timestamp),
        datasets: [
          {
            label: 'Words',
            data: signals.map(d => ({ x: d.timestamp, y: d.sentiment })),
            borderColor: '#64b5f6',
            fill: false,
            tension: 0.3,
            pointRadius: 0,
            borderWidth: 2
          },
          {
            label: 'Voice',
            data: signals.map(d => ({ x: d.timestamp, y: d.energy })),
            borderColor: '#81c784',
            fill: false,
            tension: 0.3,
            pointRadius: 0,
            borderWidth: 2
          },
          {
            label: 'Face',
            data: signals.map(d => ({ x: d.timestamp, y: d.score })),
            borderColor: '#f48fb1',
            fill: false,
            tension: 0.3,
            pointRadius: 0,
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'linear',
            ticks: {
              color: '#aaa',
              callback: v => `${v.toFixed(1)}s`
            },
            title: {
              display: true,
              text: 'Time (s)',
              color: '#ccc'
            }
          },
          y: {
            ticks: { color: '#aaa' }
          }
        },
        plugins: {
          legend: {
            labels: { color: '#ccc' }
          }
        }
      },
      plugins: [highlightPlugin]
    });
  });

  onDestroy(() => {
    if (chart) chart.destroy();
  });

  $: {
    if (chart) {
      chart.update('none');
    }
  }
</script>

<style>
  .timeline-wrapper {
    background: #1e1e1e;
    border-radius: 8px;
    padding: 16px;
    color: #eee;
    height: 340px;
    position: relative;
    border: 1px solid #333;
    display: flex;
    flex-direction: column;
  }

  .timeline-wrapper h3 {
    margin: 0 0 12px 0;
    font-size: 1rem;
    color: #90caf9;
    font-weight: 600;
  }

  .chart-container {
    position: relative;
    flex: 1;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.3);
  }

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>

<div class="timeline-wrapper">
  <h3>Multimodal Emotion Timeline</h3>
  <div class="chart-container" bind:this={chartContainer}>
    <canvas bind:this={canvas}></canvas>
  </div>
</div>