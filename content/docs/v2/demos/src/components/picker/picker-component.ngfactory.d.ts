/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './picker-component';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import26 from '../backdrop/backdrop.ngfactory';
export declare class Wrapper_PickerColumnCmp {
    _eventHandler: Function;
    context: import0.PickerColumnCmp;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    _expr_3: any;
    subscription0: any;
    constructor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_col(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any, emit0: boolean): void;
}
export declare class Wrapper_PickerCmp {
    _eventHandler: Function;
    context: import0.PickerCmp;
    _changed: boolean;
    constructor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any): void;
}
export declare const PickerColumnCmpNgFactory: import8.ComponentFactory<import0.PickerColumnCmp>;
export declare class View_PickerColumnCmp0 extends import2.AppView<import0.PickerColumnCmp> {
    _viewQuery_colEle_0: import15.QueryList<any>;
    _anchor_0: any;
    _vc_0: import16.ViewContainer;
    _TemplateRef_0_5: any;
    _NgIf_0_6: import17.Wrapper_NgIf;
    _el_1: any;
    _anchor_2: any;
    _vc_2: import16.ViewContainer;
    _TemplateRef_2_5: any;
    _NgFor_2_6: import18.Wrapper_NgFor;
    _anchor_3: any;
    _vc_3: import16.ViewContainer;
    _TemplateRef_3_5: any;
    _NgIf_3_6: import17.Wrapper_NgIf;
    _expr_14: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import8.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    createEmbeddedViewInternal(nodeIndex: number): import2.AppView<any>;
}
export declare const PickerCmpNgFactory: import8.ComponentFactory<import0.PickerCmp>;
export declare class View_PickerCmp0 extends import2.AppView<import0.PickerCmp> {
    _viewQuery_PickerColumnCmp_0: import15.QueryList<any>;
    _text_0: any;
    _el_1: any;
    _Backdrop_1_3: import26.Wrapper_Backdrop;
    _text_2: any;
    _el_3: any;
    _text_4: any;
    _el_5: any;
    _text_6: any;
    _anchor_7: any;
    _vc_7: import16.ViewContainer;
    _TemplateRef_7_5: any;
    _NgFor_7_6: import18.Wrapper_NgFor;
    _text_8: any;
    _text_9: any;
    _el_10: any;
    _text_11: any;
    _el_12: any;
    _text_13: any;
    _anchor_14: any;
    _vc_14: import16.ViewContainer;
    _TemplateRef_14_5: any;
    _NgFor_14_6: import18.Wrapper_NgFor;
    _text_15: any;
    _el_16: any;
    _text_17: any;
    _text_18: any;
    _text_19: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import8.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    createEmbeddedViewInternal(nodeIndex: number): import2.AppView<any>;
    handleEvent_1(eventName: string, $event: any): boolean;
}
