# Mtx App Bar `<mtx-app-bar>`

Mtx App Bar is a toolbar component to define App Bar for pages. It is designed using Material 
Design Guidelines with Material Extension design and styling.

#### Sections

Mtx App Bar has the following sections to structure the layout of the App Bar.

| Sections                | Description                                                            |
| ----------------------- | ---------------------------------------------------------------------- |
| `mtx-app-bar-title`     | The Title of the page.                                                 |
| `mtx-app-bar-button`    | Action button item on the App Bar. Can be icon, button or custom.      |
| `mtx-app-bar-prominent` | The container to hold the content for the prominent area.              |


#### Sizing

Mtx App Bar supports different sizes which can be set using the `size` property and supports the 
values of `standard`, `dense` and `prominent` as per material design guidelines.

```
<mtx-app-bar size="..."> ... </mtx-app-bar>
```

#### Navigation

Mtx App Bar supports Navigation and can be set using the `nav` property and supports the values of 
`none`, `menu`, `back` and `close` as per material design guidelines.

```
<mtx-app-bar nav="..."> ... </mtx-app-bar>
```

#### Overflow

Mtx App Bar supports Overflow menu and can be bound to a `mat-menu` set using the `overflow` property.

```
<mtx-app-bar overflow="menu"> ... </mtx-app-bar>

<mat-menu #menu="matMenu">
 ...
</mat-menu>
```

#### Themimg

Mtx App Bar can be colored in terms of the current theme using the `color` property to set the 
background color to `primary`, `accent`, or `warn`.


#### Example

```
<mtx-app-bar size="prominent" nav="back" overflow="menu" color="primary">

    <mtx-app-bar-title> ... </mtx-app-bar-title>
    
    <mtx-app-bar-button> ... </mtx-app-bar-button>
    <mtx-app-bar-button> ... </mtx-app-bar-button>
    <mtx-app-bar-button> ... </mtx-app-bar-button>
        
</mtx-page>
```
