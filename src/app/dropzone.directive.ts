import {
  Directive,
  Output,
  EventEmitter,
  HostListener,
  Host
} from "@angular/core";

@Directive({
  selector: "[appDropzone]"
})
export class DropzoneDirective {
  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  @HostListener("drop", ["$event"])
  onDrop($event) {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
  }

  @HostListener("dragOver", ["$event"])
  onDragOver($event) {
    $event.preventDefault;
    this.hovered.emit(false);
  }

  @HostListener("dragLeave", ["$event"])
  onDragLeave($event) {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
