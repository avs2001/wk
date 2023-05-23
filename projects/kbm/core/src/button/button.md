## Usage

```html

<button kbm-button>Button</button>
<button kbm-button>
  <kbm-icon>add</kbm-icon>
  Button with icon left
</button>
<button kbm-button>
  Button with icon right
  <kbm-icon end>add</kbm-icon>
</button>
<a kbm-button>Link button</a>
```

### Customization

```css | pure
.button {
  --kbm-button-radius: 900px;
  --kbm-button-height: 30px;
  --kbm-button-border-width: 1px;
  --kbm-button-border-color: #000;
  --kbm-button-background: rgba(0, 0, 0, 0);
  --kbm-button-text-color: #000;
  --kbm-button-focus-background: var(--color-secondary, #ccc);
  --kbm-button-focus-border-color: var(--color-secondary, #ccc);
  --kbm-button-font-family: "Roboto", sans-serif;
  --kbm-button-font-size: 1rem;
  --kbm-button-font-weight: 400;
  --icon-font-weight: 400;
}
```

