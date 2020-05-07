# Material Extension

This library extends the basic features of Angular Material

#### Installation

Run `npm i mat-ex` to install this library

## Toolbar Button `<mtx-toolbar-button>`

Toolbar buttons are Angular Material mat-button elements enhanced with Material Extension design and styling.

#### Properties

The following attributes define the appearance and behaviour of the toolbar button.

| Attribute  | Description                                       |
| ---------- | ------------------------------------------------- |
| `icon`     | Material Icon ligature to display icon in button  |
| `text`     | Text to display within button                     |
| `dropdown` | Dropdown caret icon for button                    |
| `vertical` | Vertical Orientation for content                  |

#### Styling

There are several toolbar button variants, and can be changed using the `variant` property to set 
the style to `raised`, `flat`, or `stroked`.

#### Theming

Toolbar buttons can be colored in terms of the current theme using the `color` property to set 
the background color to `primary`, `accent`, or `warn`.

#### Examples

```
<mtx-toolbar-button icon="check" variant="raised" color="primary"></mtx-toolbar-button>
<mtx-toolbar-button icon="check" text="Finish" vertical></mtx-toolbar-button>
<mtx-toolbar-button text="Finish" dropdown></mtx-toolbar-button>
```
