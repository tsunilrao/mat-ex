# Dialog `<mtx-dialog>`

Dialogs are Angular Material mat-button elements enhanced with Material Extension design and styling.

#### Dialog Content

Several directives are available to make it easier to structure your dialog content:

| Attribute            | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `mtx-dialog-title`   | Dialog title, applied to a heading element.                  |
| `mtx-dialog-content` | Primary scrollable content of the dialog.                    |
| `mtx-dialog-actions` | Container for action buttons at the bottom of the dialog.    |
|                      | Button alignment can be controlled via the `align` attribute |
|                      | which can be set to `start`, `end` or `center`.              |
| -------------------- | ------------------------------------------------------------ |

#### Styling

There are several dialog variants, and can be changed using the `variant` property to set 
the style to `basic`, `flat`, `stroked`, or `raised`.

#### Theming

Dialogs can be colored in terms of the current theme using the `color` property to set 
the background color to `primary`, `accent`, or `warn`.

#### Examples

```
<mtx-dialog>
    <mtx-dialog-title>Delete all content?</mtx-dialog-title>
    <mtx-dialog-content>
        This will delete all elements that are currently on this page and cannot be undone.
    </mtx-dialog-content>
    <mtx-dialog-actions>
        <button mat-button>Cancel</button>
        <button mat-button>Delete</button>
    </mtx-dialog-actions>
</mtx-dialog-button>

<mtx-dialog variant="raised" color="primary">
    <mtx-dialog-title>Delete all content?</mtx-dialog-title>
    <mtx-dialog-content>
        This will delete all elements that are currently on this page and cannot be undone.
    </mtx-dialog-content>
    <mtx-dialog-actions align="end">
        <button mat-button>Cancel</button>
        <button mat-button>Delete</button>
    </mtx-dialog-actions>
</mtx-dialog-button>
```
