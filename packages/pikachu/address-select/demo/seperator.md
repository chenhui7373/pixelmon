---
order: 2
title:
  zh-CN: 间隔符
  bg: f2f4f5
---

自定义间隔符，自定义级别

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-demo-address-select-separator',
  template: `
    <p-address-select style="width: 320px;" [level]="2" [(ngModel)]="selectedValue" separator="-" nzPlaceHolder="选择政区地址"></p-address-select>
     <span style="margin-left:30px">
        值：{{selectedValue}}
    </span>
  `
})
export class PDemoSelectSeparatorComponent  implements OnInit {
  selectedValue = "";
  ngOnInit(): void {
  }
}

```
