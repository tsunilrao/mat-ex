# Material Extension

This library extends the basic features of Angular Material

#### Installation

Run `npm i mat-ex` to install this library

## Toolbar Button `<mtx-toolbar-button>`

Toolbar buttons are Angular Material mat-button elements enhanced with Material Extension design and styling.

#### Behaviour

The following attributes define the behavioural content of the toolbar button.

| Attribute  | Description                                       |
| ---------- | ------------------------------------------------- |
| `icon`     | Material Icon ligature to display icon in button  |
| `text`     | Text to display within button                     |
| `dropdown` | Dropdown caret icon for button                    |

#### Styling

There are several toolbar button variants, each applied as an attribute:

| Attribute  | Description                                     |
| ---------- | ----------------------------------------------- |
| none       | Rectangular button with no elevation            |
| `raised`   | Rectangular contained button with elevation     |
| `flat`     | Rectangular contained button with no elevation  |
| `stroked`  | Rectangular outlined button with no elevation   |

#### Theming

Toolbar buttons can be colored in terms of the current theme using the `color` property to set 
the background color to `primary`, `accent`, or `warn`.

#### Examples

```
<mtx-toolbar-button raised icon="check" color="primary"></mtx-toolbar-button>

<mtx-toolbar-button flat icon="check" text="finish"></mtx-toolbar-button>

<mtx-toolbar-button flat text="finish" dropdown></mtx-toolbar-button>
```
