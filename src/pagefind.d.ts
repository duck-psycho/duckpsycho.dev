declare class PagefindUI {
  constructor(options: {
    element: string | HTMLElement;
    bundlePath?: string;
    showImages?: boolean;
    excerptLength?: number;
    resetStyles?: boolean;
  });
  destroy(): void;
}

interface Window {
  PagefindUI: typeof PagefindUI;
}
