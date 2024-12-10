import { DEFAULT_VOLUME } from "./contants";

export default class AudioManager {
	static _instance: AudioManager;

	private audio: HTMLAudioElement | null = null;
	private _volume = DEFAULT_VOLUME;

	private constructor() { }

	public static get instance(): AudioManager {
		if (!AudioManager._instance) {
			AudioManager._instance = new AudioManager();
		}
		return AudioManager._instance;
	}

	public set volume(value: number) {
		this._volume = value;
	}

	public play(src: string) {
		if (this.audio) {
			this.audio.pause()
		}

		this.audio = new Audio(src);
		this.audio.volume = this._volume;
		this.audio.play();
	}

	public pause() {
		if (this.audio) {
			this.audio.pause();
		}
	}
}

