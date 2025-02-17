import { DOCUMENT, NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-colors',
  imports: [NgFor],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent {

  colorVars = [
    '--mat-sys-background',
    '--mat-sys-error',
    '--mat-sys-error-container',
    '--mat-sys-inverse-on-surface',
    '--mat-sys-inverse-primary',
    '--mat-sys-inverse-surface',
    '--mat-sys-on-background',
    '--mat-sys-on-error',
    '--mat-sys-on-error-container',
    '--mat-sys-on-primary',
    '--mat-sys-on-primary-container',
    '--mat-sys-on-primary-fixed',
    '--mat-sys-on-primary-fixed-variant',
    '--mat-sys-on-secondary',
    '--mat-sys-on-secondary-container',
    '--mat-sys-on-secondary-fixed',
    '--mat-sys-on-secondary-fixed-variant',
    '--mat-sys-on-surface',
    '--mat-sys-on-surface-variant',
    '--mat-sys-on-tertiary',
    '--mat-sys-on-tertiary-container',
    '--mat-sys-on-tertiary-fixed',
    '--mat-sys-on-tertiary-fixed-variant',
    '--mat-sys-outline',
    '--mat-sys-outline-variant',
    '--mat-sys-primary',
    '--mat-sys-primary-container',
    '--mat-sys-primary-fixed',
    '--mat-sys-primary-fixed-dim',
    '--mat-sys-scrim',
    '--mat-sys-secondary',
    '--mat-sys-secondary-container',
    '--mat-sys-secondary-fixed',
    '--mat-sys-secondary-fixed-dim',
    '--mat-sys-shadow',
    '--mat-sys-surface',
    '--mat-sys-surface-bright',
    '--mat-sys-surface-container',
    '--mat-sys-surface-container-high',
    '--mat-sys-surface-container-highest',
    '--mat-sys-surface-container-low',
    '--mat-sys-surface-container-lowest',
    '--mat-sys-surface-dim',
    '--mat-sys-surface-tint',
    '--mat-sys-surface-variant',
    '--mat-sys-tertiary',
    '--mat-sys-tertiary-container',
    '--mat-sys-tertiary-fixed',
    '--mat-sys-tertiary-fixed-dim',
    '--mat-sys-neutral-variant20',
    '--mat-sys-neutral10'
  ];

  colors: { name: string, value: string }[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    const computedStyles = getComputedStyle(this.document.documentElement);
    this.colors = this.colorVars.map(varName => {
      const value = computedStyles.getPropertyValue(varName).trim();
      return { name: varName, value };
    });
  }

}