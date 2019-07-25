import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { DYNAMIC_FIELD_COMPONENTS_MAP } from '../dynamic-field-components-map.constant';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[fgDynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input()
  config;

  @Input()
  group: FormGroup;

  // TODO type this with an interface
  currentComponent: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const dynamicFieldComponent = DYNAMIC_FIELD_COMPONENTS_MAP[this.config.type];
    // TODO replace any with interface
    const factory = this.resolver.resolveComponentFactory<any>(dynamicFieldComponent);
    this.currentComponent = this.viewContainerRef.createComponent(factory);
    this.currentComponent.instance.config = this.config;
    this.currentComponent.instance.group = this.group;
  }

}
