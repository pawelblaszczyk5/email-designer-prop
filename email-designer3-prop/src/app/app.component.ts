import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('iframe')
  private iframeElement?: ElementRef<HTMLIFrameElement>;

  constructor(
    private renderer: Renderer2
  ) {
  }

  public ngAfterViewInit(): void {
    this.waitForPreview();
  }

  private waitForPreview(): void {
    if (!this.iframeElement) {
      return;
    }

    const stopListener = this.renderer.listen('window', 'message', ({data}) => {
      if (data === 'previewReady') {
        this.sendPreviewData();
      }
    });
  }

  private sendPreviewData(): void {
    if (!this.iframeElement?.nativeElement.contentWindow) {
      return;
    }

    this.iframeElement.nativeElement.contentWindow.postMessage({
      type: 'update',
      content: []
    }, '*');
  }
}
