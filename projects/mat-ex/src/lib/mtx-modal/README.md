# Modal `<mtx-modal>`

Modals are Angular Material mat-dialog elements enhanced with Material Extension design and styling.

#### Modal Content

All HTML and Angular directives are supported

#### Functions

| Function | Description                           |
| ---------| ------------------------------------- |
| `open`   | Opens the modal.                      |
| `close`  | Closes the modal.                     |

#### Examples

```
<mtx-modal #modal>
    ...
</mtx-modal>

<mtx-modal #dialog>
    <mtx-dialog-title>Delete all content?</mtx-dialog-title>
    <mtx-dialog-content>
        This will delete all elements that are currently on this page and cannot be undone.
    </mtx-dialog-content>
    <mtx-dialog-actions align="end">
        <button mat-button>Cancel</button>
        <button mat-button>Delete</button>
    </mtx-dialog-actions>
</mtx-modal>
```
