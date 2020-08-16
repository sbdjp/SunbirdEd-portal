import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {
  @ViewChild('confirmationModal') confirmationModal;
  @Input() popupMode: string;
  @Output() close = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.confirmationModal.deny();
    this.close.emit();
  }

  navigateToAddCertificate() {
    this.confirmationModal.deny();
    this.close.emit({mode: 'add-certificates'});
  }

}