import { writable } from 'svelte/store';

/**
 * Global store for tracking the current video playback time
 * This allows all components (EmotionTimeline, MicrostatePanel, TranscriptPane)
 * to stay synchronized with the video player
 */
export const selectedTime = writable(0);